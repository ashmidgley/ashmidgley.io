"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import {
  animate,
  motion,
  MotionConfig,
  MotionValue,
  motionValue,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { experiences, profile, projects, stack } from "@/lib/content";
import { Badge } from "../Badge";

const GRID = 24;
const MIN_SCALE = 0.35;
const MAX_SCALE = 1.6;
const SPRING = { type: "spring", stiffness: 260, damping: 30 } as const;
const INTRO = { duration: 1.6, ease: [0.65, 0, 0.35, 1] } as const;

interface CardSpec {
  id: string;
  x: number;
  y: number;
  w: number;
  rotate: number;
  render: () => React.ReactNode;
}

const WindowBar = ({ label }: { label: string }) => (
  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#006b35]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#00fd35]" />
    <span className="ml-3 truncate font-mono text-[11px] text-slate-400">{label}</span>
  </div>
);

const Panel = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={clsx(
      "overflow-hidden rounded-xl border border-white/15 bg-[#171616] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]",
      className
    )}
  >
    {children}
  </div>
);

// World coordinates for each card's top-left corner. BOUNDS wraps them all and
// HERO_CENTRE is where the camera settles after the intro.
const BOUNDS = { x: -1260, y: -640, w: 2480, h: 1240 };
const HERO_CENTRE = { x: -90, y: -40 };

const CARDS: CardSpec[] = [
  {
    id: "hero",
    x: -470,
    y: -300,
    w: 760,
    rotate: 0,
    render: () => (
      <Panel>
        <WindowBar label="README.md" />
        <div className="p-8 sm:p-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#00fd35]">
            {profile.eyebrow}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05]">{profile.headline}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-[#00fd35] px-5 py-2.5 text-sm font-semibold text-black"
            >
              Get in touch
            </a>
            <a
              href={profile.github}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:border-[#00fd35] hover:text-[#00fd35]"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:border-[#00fd35] hover:text-[#00fd35]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Panel>
    ),
  },
  {
    id: "note",
    x: -400,
    y: -500,
    w: 230,
    rotate: -4,
    render: () => (
      <div className="rounded-md bg-[#006b35] p-5 text-[#00fd35] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Psst</p>
        <p className="mt-2 text-lg font-semibold leading-snug">
          Everything here is draggable. Make a mess, then hit Tidy.
        </p>
      </div>
    ),
  },
  ...experiences.map((experience, i) => ({
    id: `experience-${i}`,
    x: [-1240, -870, -1240, -870][i],
    y: [-600, -520, -110, -40][i],
    w: 330,
    rotate: [-2, 1.5, 1, -1.5][i],
    render: () => (
      <Panel className="p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-xs text-[#00fd35]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[11px] text-slate-400">{experience.dates}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-tight">{experience.role}</h3>
        <p className="font-semibold text-[#00fd35]">{experience.company}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{experience.summary}</p>
        <p className="mt-3 border-l-2 border-[#00fd35] pl-3 text-sm leading-relaxed">
          {experience.impact}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {experience.stack.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </Panel>
    ),
  })),
  ...projects.map((project, i) => ({
    id: `project-${i}`,
    x: [360, 360][i],
    y: [-620, 0][i],
    w: 480,
    rotate: [2, -1.5][i],
    render: () => (
      <Panel>
        <WindowBar label={project.title} />
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="480px"
          draggable={false}
        />
        <div className="p-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <a href={project.href} className="text-xs text-slate-400 underline hover:line-through">
              Visit
            </a>
          </div>
          <p className="font-semibold text-[#00fd35]">{project.subtitle}</p>
          <p className="mt-3 border-l-2 border-[#00fd35] pl-3 text-sm leading-relaxed">
            {project.impact}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </div>
      </Panel>
    ),
  })),
  {
    id: "stack",
    x: -470,
    y: 300,
    w: 380,
    rotate: -1,
    render: () => (
      <Panel className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00fd35]">Stack</p>
        <p className="mt-2 text-sm text-slate-400">My usual toolkit, most used first.</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map(({ name, count }) => (
            <Badge key={name}>
              {name}
              {count > 1 && <span className="ml-1 opacity-60">×{count}</span>}
            </Badge>
          ))}
        </div>
      </Panel>
    ),
  },
  {
    id: "contact",
    x: 900,
    y: -300,
    w: 300,
    rotate: 3,
    render: () => (
      <div className="rounded-xl bg-[#00fd35] p-6 text-black shadow-[0_24px_60px_-24px_rgba(0,253,53,0.5)]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Let&apos;s build</p>
        <p className="mt-3 text-3xl font-semibold leading-none">Want to work with me?</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-5 inline-block font-semibold underline hover:line-through"
        >
          {profile.email}
        </a>
      </div>
    ),
  },
];

interface CardProps {
  spec: CardSpec;
  offset: { x: MotionValue<number>; y: MotionValue<number> };
  z: number;
  onFront: () => void;
}

const Card = ({ spec, offset, z, onFront }: CardProps) => {
  const dragged = useRef(false);

  return (
    <motion.div
      data-card
      drag
      dragTransition={{ power: 0.15, timeConstant: 180 }}
      onPointerDown={() => {
        dragged.current = false;
        onFront();
      }}
      onDragStart={() => {
        dragged.current = true;
      }}
      // A drag that ends over a link shouldn't also follow it.
      onClickCapture={(event) => {
        if (!dragged.current) return;
        event.preventDefault();
        event.stopPropagation();
      }}
      initial={{ opacity: 0, scale: 0.9, rotate: spec.rotate }}
      animate={{ opacity: 1, scale: 1, rotate: spec.rotate }}
      whileHover={{ rotate: 0 }}
      whileDrag={{ scale: 1.03, rotate: 0, cursor: "grabbing" }}
      transition={SPRING}
      style={{ left: spec.x, top: spec.y, width: spec.w, x: offset.x, y: offset.y, zIndex: z }}
      className="absolute cursor-grab select-none"
    >
      {spec.render()}
    </motion.div>
  );
};

const ToolButton = ({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label?: string;
}) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="cursor-pointer rounded-full px-2 py-1.5 text-slate-300 sm:px-3 transition-colors hover:bg-white/10 hover:text-white"
  >
    {children}
  </button>
);

// A pannable, zoomable desk where every part of the site is a draggable card.
export const Canvas = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const panX = useMotionValue(0);
  const panY = useMotionValue(0);
  const scale = useMotionValue(1);
  const views = useRef({
    home: { x: 0, y: 0, scale: 1 },
    overview: { x: 0, y: 0, scale: 1 },
  });
  const pan = useRef<{ id: number; x: number; y: number; panX: number; panY: number } | null>(
    null
  );
  const offsets = useMemo(
    () => CARDS.map(() => ({ x: motionValue(0), y: motionValue(0) })),
    []
  );
  const [stackOrder, setStackOrder] = useState(() => CARDS.map((card) => card.id));
  const [zoom, setZoom] = useState(100);
  const [panning, setPanning] = useState(false);

  const gridSize = useTransform(scale, (s) => `${GRID * s}px ${GRID * s}px`);
  const gridPosition = useMotionTemplate`${panX}px ${panY}px`;
  useMotionValueEvent(scale, "change", (s) => setZoom(Math.round(s * 100)));

  const flyTo = (view: { x: number; y: number; scale: number }) => {
    animate(panX, view.x, SPRING);
    animate(panY, view.y, SPRING);
    animate(scale, view.scale, SPRING);
  };

  // Open on the whole desk, then glide in to the hero.
  useLayoutEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const centreOn = (x: number, y: number, s: number) => ({
      x: width / 2 - x * s,
      y: height / 2 - y * s,
      scale: s,
    });
    const fit = Math.max(MIN_SCALE, Math.min((width - 48) / BOUNDS.w, (height - 120) / BOUNDS.h));
    const focus = Math.min(0.85, (width - 32) / 760);
    views.current = {
      overview: centreOn(BOUNDS.x + BOUNDS.w / 2, BOUNDS.y + BOUNDS.h / 2, fit),
      home: centreOn(HERO_CENTRE.x, HERO_CENTRE.y, focus),
    };
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const start = reduced ? views.current.home : views.current.overview;
    panX.jump(start.x);
    panY.jump(start.y);
    scale.jump(start.scale);
    if (reduced) return;
    const intro = setTimeout(() => {
      animate(panX, views.current.home.x, INTRO);
      animate(panY, views.current.home.y, INTRO);
      animate(scale, views.current.home.scale, INTRO);
    }, 900);
    return () => clearTimeout(intro);
  }, [panX, panY, scale]);

  const zoomAt = (cx: number, cy: number, factor: number, smooth = false) => {
    const current = scale.get();
    const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, current * factor));
    const k = next / current;
    const targets = [
      [panX, cx - (cx - panX.get()) * k],
      [panY, cy - (cy - panY.get()) * k],
      [scale, next],
    ] as const;
    for (const [value, target] of targets) {
      if (smooth) animate(value, target, SPRING);
      else value.set(target);
    }
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    // Registered natively so ctrl/pinch zoom can preventDefault the browser zoom.
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (event.ctrlKey || event.metaKey) {
        zoomAt(event.clientX, event.clientY, Math.exp(-event.deltaY * 0.01));
      } else {
        panX.set(panX.get() - event.deltaX);
        panY.set(panY.get() - event.deltaY);
      }
    };
    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
    // zoomAt only reads motion values, so it never goes stale.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panX, panY]);

  const startPan = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("[data-card], button, a")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pan.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      panX: panX.get(),
      panY: panY.get(),
    };
    setPanning(true);
  };

  const movePan = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = pan.current;
    if (!start || start.id !== event.pointerId) return;
    panX.set(start.panX + event.clientX - start.x);
    panY.set(start.panY + event.clientY - start.y);
  };

  const endPan = () => {
    pan.current = null;
    setPanning(false);
  };

  const bringToFront = (id: string) =>
    setStackOrder((order) =>
      order[order.length - 1] === id ? order : [...order.filter((card) => card !== id), id]
    );

  const tidy = () => {
    for (const offset of offsets) {
      animate(offset.x, 0, SPRING);
      animate(offset.y, 0, SPRING);
    }
  };

  const scatter = () => {
    for (const offset of offsets) {
      animate(offset.x, (Math.random() - 0.5) * 420, SPRING);
      animate(offset.y, (Math.random() - 0.5) * 320, SPRING);
    }
  };


  const zoomFromCenter = (factor: number) =>
    zoomAt(window.innerWidth / 2, window.innerHeight / 2, factor, true);

  return (
    <MotionConfig
      reducedMotion="user"
      // Drag deltas arrive in screen pixels; convert them to world pixels.
      transformPagePoint={(point) => ({ x: point.x / scale.get(), y: point.y / scale.get() })}
    >
      <motion.div
        ref={viewportRef}
        onPointerDown={startPan}
        onPointerMove={movePan}
        onPointerUp={endPan}
        onPointerCancel={endPan}
        style={{ backgroundSize: gridSize, backgroundPosition: gridPosition }}
        className={clsx(
          "fixed inset-0 touch-none overflow-hidden bg-[#111010] bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)]",
          panning ? "cursor-grabbing" : "cursor-grab"
        )}
      >
        <motion.div
          style={{ x: panX, y: panY, scale, originX: 0, originY: 0 }}
          className="absolute top-0 left-0"
        >
          {CARDS.map((spec, i) => (
            <Card
              key={spec.id}
              spec={spec}
              offset={offsets[i]}
              z={stackOrder.indexOf(spec.id) + 1}
              onFront={() => bringToFront(spec.id)}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="fixed top-16 left-1/2 z-40 flex sm:top-3 -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/15 bg-[#171616]/90 p-1 font-mono text-xs backdrop-blur">
        <ToolButton label="Zoom out" onClick={() => zoomFromCenter(1 / 1.25)}>
          −
        </ToolButton>
        <span className="w-10 text-center text-slate-400 tabular-nums sm:w-12">{zoom}%</span>
        <ToolButton label="Zoom in" onClick={() => zoomFromCenter(1.25)}>
          +
        </ToolButton>
        <span className="mx-1 h-4 w-px bg-white/15" />
        <ToolButton onClick={tidy}>Tidy</ToolButton>
        <ToolButton onClick={scatter}>Scatter</ToolButton>
        <ToolButton onClick={() => flyTo(views.current.home)}>Centre</ToolButton>
        <ToolButton onClick={() => flyTo(views.current.overview)}>All</ToolButton>
      </div>

      <p className="pointer-events-none fixed bottom-4 left-4 z-40 hidden max-w-xs font-mono text-[11px] leading-relaxed text-slate-500 lg:block">
        Drag cards to move them. Drag or scroll the background to pan. Ctrl/⌘ + scroll to zoom.
      </p>
    </MotionConfig>
  );
};
