"use client";

import { useEffect, useRef } from "react";

export const DOT_GRID_VARIANTS = [
  { id: "halo", label: "Halo" },
  { id: "lens", label: "Lens" },
  { id: "comet", label: "Comet" },
  { id: "sonar", label: "Sonar" },
] as const;

export type DotGridVariant = (typeof DOT_GRID_VARIANTS)[number]["id"];

const SPACING = 18;
const DOT_RADIUS = 1.1;
const LEVELS = 24;
const SPRITE_SIZE = 32;

// Resting dots are faint white; intensity ramps through #006b35 to #00fd35.
const REST = [255, 255, 255, 0.13];
const DEEP = [0, 107, 53, 0.9];
const ACCENT = [0, 253, 53, 1];

const mix = (from: number[], to: number[], k: number) =>
  from.map((value, i) => value + (to[i] - value) * k);

const RAMP = Array.from({ length: LEVELS + 1 }, (_, level) => {
  const t = level / LEVELS;
  const [r, g, b, a] =
    t < 0.5 ? mix(REST, DEEP, t * 2) : mix(DEEP, ACCENT, (t - 0.5) * 2);
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
});

interface Pointer {
  x: number;
  y: number;
  // Previous frame's position, for drawing continuous trails.
  px: number;
  py: number;
  // Eased position the effect actually follows.
  ex: number;
  ey: number;
  vx: number;
  vy: number;
  inside: boolean;
  presence: number;
}

interface Ping {
  x: number;
  y: number;
  born: number;
  strength: number;
}

interface Field {
  w: number;
  h: number;
  cols: number;
  rows: number;
  ox: number;
  oy: number;
  heat: Float32Array;
  pings: Ping[];
  lastPing: number;
  time: number;
  pointer: Pointer;
}

// Per-dot output: intensity (0..1), offset and size multiplier.
interface Sample {
  t: number;
  dx: number;
  dy: number;
  s: number;
}

interface Variant {
  // Advances the effect; returns true while there is still motion to draw.
  update(f: Field, dt: number): boolean;
  sample(f: Field, x: number, y: number, i: number, out: Sample): void;
  underlay?(ctx: CanvasRenderingContext2D, f: Field): void;
  onStart?(f: Field): void;
  onPress?(f: Field): void;
}

const smooth = (k: number) => k * k * (3 - 2 * k);

const approach = (value: number, target: number, rate: number, dt: number) =>
  value + (target - value) * (1 - Math.exp(-rate * dt));

const easePresence = (p: Pointer, dt: number) => {
  const target = p.inside ? 1 : 0;
  p.presence = approach(p.presence, target, 5, dt);
  return Math.abs(p.presence - target) > 0.002;
};

const easePointer = (p: Pointer, dt: number, rate: number) => {
  p.ex = approach(p.ex, p.x, rate, dt);
  p.ey = approach(p.ey, p.y, rate, dt);
  const fading = easePresence(p, dt);
  return fading || Math.abs(p.ex - p.x) + Math.abs(p.ey - p.y) > 0.2;
};

const HALO_RADIUS = 160;

// Dots swell and glow green around a softly trailing cursor.
const halo: Variant = {
  update: (f, dt) => easePointer(f.pointer, dt, 10),
  sample(f, x, y, _i, out) {
    const p = f.pointer;
    const d = Math.hypot(x - p.ex, y - p.ey);
    if (d >= HALO_RADIUS) return;
    out.t = smooth(1 - d / HALO_RADIUS) * p.presence;
    out.s = 1 + 1.8 * out.t;
  },
  underlay(ctx, f) {
    const p = f.pointer;
    if (p.presence < 0.01) return;
    const r = HALO_RADIUS * 1.6;
    const glow = ctx.createRadialGradient(p.ex, p.ey, 0, p.ex, p.ey, r);
    glow.addColorStop(0, `rgba(0, 253, 53, ${0.07 * p.presence})`);
    glow.addColorStop(1, "rgba(0, 253, 53, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(p.ex - r, p.ey - r, r * 2, r * 2);
  },
};

const LENS_RADIUS = 170;

// A magnifying bubble on a springy cursor: dots spread and enlarge in the
// middle, bunch up into a glowing rim, and wobble as the lens catches up.
const lens: Variant = {
  update(f, dt) {
    const p = f.pointer;
    p.vx += ((p.x - p.ex) * 160 - p.vx * 13) * dt;
    p.vy += ((p.y - p.ey) * 160 - p.vy * 13) * dt;
    p.ex += p.vx * dt;
    p.ey += p.vy * dt;
    const fading = easePresence(p, dt);
    const offset = Math.hypot(p.x - p.ex, p.y - p.ey);
    return fading || offset > 0.2 || Math.hypot(p.vx, p.vy) > 1;
  },
  sample(f, x, y, _i, out) {
    const p = f.pointer;
    const dx = x - p.ex;
    const dy = y - p.ey;
    const d = Math.hypot(dx, dy);
    if (d >= LENS_RADIUS || p.presence < 0.001) return;
    const q = d / LENS_RADIUS;
    const push = 34 * Math.sin(Math.PI * q) * (1 - q) * p.presence;
    if (d > 0) {
      out.dx = (dx / d) * push;
      out.dy = (dy / d) * push;
    }
    const rim = Math.exp(-(((q - 0.78) / 0.12) ** 2));
    const core = 0.3 * (1 - q) ** 2;
    out.t = Math.max(rim, core) * p.presence;
    out.s = 1 + (1.4 * (1 - q) ** 2 + rim * 0.8) * p.presence;
  },
};

const COMET_RADIUS = 54;
const COMET_HEAD = 40;
const COMET_DECAY = 1.4;

const depositTrail = (
  f: Field,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  amount: number
) => {
  const r = COMET_RADIUS;
  const c0 = Math.max(0, Math.floor((Math.min(x0, x1) - r - f.ox) / SPACING));
  const c1 = Math.min(f.cols - 1, Math.ceil((Math.max(x0, x1) + r - f.ox) / SPACING));
  const r0 = Math.max(0, Math.floor((Math.min(y0, y1) - r - f.oy) / SPACING));
  const r1 = Math.min(f.rows - 1, Math.ceil((Math.max(y0, y1) + r - f.oy) / SPACING));
  const sx = x1 - x0;
  const sy = y1 - y0;
  const len2 = sx * sx + sy * sy || 1;

  for (let row = r0; row <= r1; row++) {
    for (let col = c0; col <= c1; col++) {
      const x = f.ox + col * SPACING;
      const y = f.oy + row * SPACING;
      const k = Math.min(1, Math.max(0, ((x - x0) * sx + (y - y0) * sy) / len2));
      const d = Math.hypot(x - (x0 + sx * k), y - (y0 + sy * k));
      if (d >= r) continue;
      const i = row * f.cols + col;
      f.heat[i] = Math.max(f.heat[i], amount * smooth(1 - d / r));
    }
  }
};

// The cursor burns a green trail into the grid that cools and drifts upward
// like embers. Faster strokes burn brighter.
const comet: Variant = {
  update(f, dt) {
    const p = f.pointer;
    const fading = easePresence(p, dt);
    if (p.inside && (p.x !== p.px || p.y !== p.py)) {
      const speed = Math.hypot(p.x - p.px, p.y - p.py) / dt;
      depositTrail(f, p.px, p.py, p.x, p.y, Math.min(1, 0.35 + speed / 2400));
    }
    p.px = p.x;
    p.py = p.y;

    const decay = Math.exp(-dt * COMET_DECAY);
    let burning = false;
    for (let i = 0; i < f.heat.length; i++) {
      if (f.heat[i] === 0) continue;
      f.heat[i] *= decay;
      if (f.heat[i] < 0.003) f.heat[i] = 0;
      else burning = true;
    }
    return burning || fading;
  },
  sample(f, x, y, i, out) {
    const p = f.pointer;
    const heat = f.heat[i];
    const d = Math.hypot(x - p.x, y - p.y);
    const head = d < COMET_HEAD ? smooth(1 - d / COMET_HEAD) * p.presence : 0;
    out.t = Math.max(heat, head);
    out.s = 1 + 2 * out.t;
    out.dy = -8 * heat * (1 - heat);
  },
};

const PING_SPEED = 520;
const PING_FADE = 520;
const PING_EVERY = 1.6;
const SONAR_HALO = 70;

// The cursor pings sonar rings across the grid every couple of seconds;
// clicking or tapping sends a stronger one. Opens with a ping from the hero.
const sonar: Variant = {
  onStart(f) {
    f.pings.push({ x: f.w / 2, y: f.h * 0.42, born: f.time, strength: 1 });
  },
  onPress(f) {
    const p = f.pointer;
    f.pings.push({ x: p.x, y: p.y, born: f.time, strength: 1 });
    f.lastPing = f.time;
  },
  update(f, dt) {
    const p = f.pointer;
    const moving = easePointer(p, dt, 14);
    if (p.inside && f.time - f.lastPing > PING_EVERY) {
      f.pings.push({ x: p.x, y: p.y, born: f.time, strength: 0.55 });
      f.lastPing = f.time;
    }
    const maxRadius = Math.hypot(f.w, f.h);
    f.pings = f.pings.filter((ping) => {
      const r = (f.time - ping.born) * PING_SPEED;
      return r < maxRadius && ping.strength * Math.exp(-r / PING_FADE) > 0.02;
    });
    return f.pings.length > 0 || p.inside || moving;
  },
  sample(f, x, y, _i, out) {
    let t = 0;
    for (const ping of f.pings) {
      const r = (f.time - ping.born) * PING_SPEED;
      const dx = x - ping.x;
      const dy = y - ping.y;
      const d = Math.hypot(dx, dy);
      const diff = d - r;
      // Sharp leading edge with a long soft wake behind it.
      const band = diff > 0 ? 16 : 70;
      if (Math.abs(diff) > band * 3) continue;
      const k = Math.exp(-((diff / band) ** 2)) * ping.strength * Math.exp(-r / PING_FADE);
      t = Math.max(t, k);
      if (d > 0) {
        out.dx += (dx / d) * k * 6;
        out.dy += (dy / d) * k * 6;
      }
    }
    const p = f.pointer;
    const d = Math.hypot(x - p.ex, y - p.ey);
    if (d < SONAR_HALO) t = Math.max(t, smooth(1 - d / SONAR_HALO) * 0.5 * p.presence);
    out.t = t;
    out.s = 1 + 1.6 * t;
  },
};

const VARIANTS: Record<DotGridVariant, Variant> = { halo, lens, comet, sonar };

const createSprites = () =>
  RAMP.map((color) => {
    const sprite = document.createElement("canvas");
    sprite.width = SPRITE_SIZE;
    sprite.height = SPRITE_SIZE;
    const ctx = sprite.getContext("2d");
    if (ctx) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(SPRITE_SIZE / 2, SPRITE_SIZE / 2, SPRITE_SIZE / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    return sprite;
  });

const createField = (w: number, h: number, previous?: Field): Field => {
  const cols = Math.ceil(w / SPACING) + 1;
  const rows = Math.ceil(h / SPACING) + 1;
  return {
    w,
    h,
    cols,
    rows,
    // Centre the grid so the edges trim evenly.
    ox: (w - (cols - 1) * SPACING) / 2,
    oy: (h - (rows - 1) * SPACING) / 2,
    heat: new Float32Array(cols * rows),
    pings: previous?.pings ?? [],
    lastPing: previous?.lastPing ?? 0,
    time: previous?.time ?? 0,
    pointer: previous?.pointer ?? {
      x: 0,
      y: 0,
      px: 0,
      py: 0,
      ex: 0,
      ey: 0,
      vx: 0,
      vy: 0,
      inside: false,
      presence: 0,
    },
  };
};

const draw = (
  ctx: CanvasRenderingContext2D,
  f: Field,
  variant: Variant | null,
  sprites: HTMLCanvasElement[],
  dpr: number
) => {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, f.w, f.h);
  variant?.underlay?.(ctx, f);

  const out: Sample = { t: 0, dx: 0, dy: 0, s: 1 };
  for (let row = 0; row < f.rows; row++) {
    const y = f.oy + row * SPACING;
    for (let col = 0; col < f.cols; col++) {
      const x = f.ox + col * SPACING;
      out.t = 0;
      out.dx = 0;
      out.dy = 0;
      out.s = 1;
      variant?.sample(f, x, y, row * f.cols + col, out);
      const level = Math.min(LEVELS, Math.round(out.t * LEVELS));
      const r = DOT_RADIUS * out.s;
      ctx.drawImage(sprites[level], x + out.dx - r, y + out.dy - r, r * 2, r * 2);
    }
  }
};

interface DotGridProps {
  variant: DotGridVariant;
}

export const DotGrid = ({ variant }: DotGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const effect = reducedMotion ? null : VARIANTS[variant];
    const sprites = createSprites();
    let field = createField(window.innerWidth, window.innerHeight);
    let dpr = 1;
    let frame = 0;
    let last = 0;

    const render = () => draw(ctx, field, effect, sprites, dpr);

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      field.time += dt;
      const busy = effect?.update(field, dt) ?? false;
      render();
      frame = busy ? requestAnimationFrame(loop) : 0;
    };

    const kick = () => {
      if (!effect || frame) return;
      last = performance.now();
      frame = requestAnimationFrame(loop);
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      field = createField(window.innerWidth, window.innerHeight, field);
      canvas.width = Math.round(field.w * dpr);
      canvas.height = Math.round(field.h * dpr);
      render();
    };

    const track = (event: PointerEvent) => {
      const p = field.pointer;
      p.x = event.clientX;
      p.y = event.clientY;
      if (!p.inside && p.presence < 0.05) {
        // Re-entering from idle: start the effect where the cursor is rather
        // than sweeping in from wherever it was last seen.
        p.ex = p.px = p.x;
        p.ey = p.py = p.y;
        p.vx = p.vy = 0;
      }
      p.inside = true;
      kick();
    };

    const press = (event: PointerEvent) => {
      track(event);
      effect?.onPress?.(field);
    };

    const release = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      field.pointer.inside = false;
      kick();
    };

    const leave = () => {
      field.pointer.inside = false;
      kick();
    };

    resize();
    effect?.onStart?.(field);
    kick();

    const root = document.documentElement;
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", track, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    window.addEventListener("pointercancel", release, { passive: true });
    window.addEventListener("blur", leave);
    root.addEventListener("pointerleave", leave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", track);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("blur", leave);
      root.removeEventListener("pointerleave", leave);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
};
