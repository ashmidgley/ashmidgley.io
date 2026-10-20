"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  motion,
  MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { experiences, profile, projects } from "@/lib/content";
import { Badge } from "../Badge";

const EASE = [0.22, 1, 0.36, 1] as const;

const Eyebrow = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={clsx("font-mono text-xs uppercase tracking-[0.2em] text-[#00fd35]", className)}>
    {children}
  </p>
);

const useTypewriter = (text: string, delay: number) => {
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    let typed = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      typed += 1;
      setCount(typed);
      if (typed >= text.length) return;
      // Linger on punctuation so the line reads like someone typing it.
      const pause = /[,.]/.test(text[typed - 1]) ? 260 : 0;
      timer = setTimeout(tick, 34 + Math.random() * 30 + pause);
    };
    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [text, delay, reducedMotion]);

  const shown = reducedMotion ? text.length : count;
  return { typed: text.slice(0, shown), done: shown >= text.length };
};

// A browser window that types the headline and tilts towards the cursor.
const Hero = () => {
  const { typed, done } = useTypewriter(profile.headline, 600);
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const tilt = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
    rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 8);
  };

  const settle = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-10 px-4 pt-24 pb-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        onPointerMove={tilt}
        onPointerLeave={settle}
        style={{ rotateX, rotateY, transformPerspective: 1400 }}
        className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#171616]/90 shadow-[0_40px_120px_-40px_rgba(0,253,53,0.25)] backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-[#006b35]" />
          <span className="h-3 w-3 rounded-full bg-[#00fd35]" />
          <span className="mx-auto rounded-md bg-black/40 px-3 py-1 font-mono text-[11px] text-slate-400">
            ashmidgley.io
          </span>
          <span className="w-[52px]" />
        </div>
        <div className="bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:18px_18px] px-6 py-12 sm:px-14 sm:py-16">
          <Eyebrow className="mb-5">{profile.eyebrow}</Eyebrow>
          <h1
            aria-label={profile.headline}
            className="relative max-w-4xl text-3xl font-semibold leading-[1.05] sm:text-6xl"
          >
            {/* The invisible copy reserves the final height so nothing jumps while typing. */}
            <span aria-hidden="true" className="invisible">
              {profile.headline}
            </span>
            <span aria-hidden="true" className="absolute inset-0">
              {typed}
              <span
                className={clsx(
                  "ml-1 inline-block h-[0.85em] w-[0.45em] translate-y-[0.1em] bg-[#00fd35]",
                  done && "animate-pulse"
                )}
              />
            </span>
          </h1>
          <motion.div
            initial={false}
            animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#00fd35] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                See the work
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[#00fd35] hover:text-[#00fd35]"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
        Scroll
        <span className="h-10 w-px origin-top animate-pulse bg-gradient-to-b from-[#00fd35] to-transparent" />
      </div>
    </section>
  );
};

const STATEMENT =
  "Frontend, backend and the infrastructure that ships them. Clear product outcomes, maintainable systems, faster execution.";
const ACCENTS = new Set(["outcomes,", "systems,", "execution."]);

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}

const Word = ({ children, progress, range, accent }: WordProps) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [14, 0]);
  return (
    <motion.span
      style={{ opacity, y }}
      className={clsx("mr-[0.25em] inline-block", accent && "text-[#00fd35]")}
    >
      {children}
    </motion.span>
  );
};

// A pinned statement that lights up word by word as you scroll through it.
const Statement = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.6, 1]);
  const words = STATEMENT.split(" ");

  return (
    <section ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center px-6">
        <motion.span
          style={{ rotate, scale }}
          className="mb-12 h-4 w-4 rounded-[4px] bg-[#00fd35]"
        />
        <p className="max-w-5xl text-center text-3xl font-semibold leading-[1.1] sm:text-6xl">
          {words.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[(i / words.length) * 0.85, ((i + 1) / words.length) * 0.85]}
              accent={ACCENTS.has(word)}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
};

// Numbered 01–04 roles that rise in one after another.
const Experience = () => (
  <section className="px-4 py-32 sm:px-8 lg:px-16">
    <div className="mb-14 max-w-3xl">
      <Eyebrow className="mb-3">Career Snapshot</Eyebrow>
      <h2 className="text-3xl font-semibold sm:text-5xl">Four roles, shipped end to end.</h2>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {experiences.map((experience, i) => (
        <motion.article
          key={experience.company}
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
          whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          className="group flex flex-col rounded-xl border border-white/15 bg-[#171616] p-6"
        >
          <span className="mb-8 text-7xl font-semibold leading-none text-transparent transition-colors duration-300 [-webkit-text-stroke:1.5px_#00fd35] group-hover:text-[#00fd35]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-semibold leading-tight">{experience.role}</h3>
          <p className="font-semibold text-[#00fd35]">{experience.company}</p>
          <p className="mt-1 font-mono text-xs text-slate-400">{experience.dates}</p>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">{experience.summary}</p>
          <p className="mt-4 border-l-2 border-[#00fd35] pl-3 text-sm leading-relaxed">
            {experience.impact}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {experience.stack.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

// Corners cut on the top edge, like a cartridge.
const CHAMFER =
  "polygon(32px 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%, 0 32px)";

// Pinned gallery that slides sideways while the page scrolls down.
const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const travel = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform([scrollYProgress, travel], ([progress, d]: number[]) => -progress * d);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const next = Math.max(0, track.scrollWidth - window.innerWidth);
      travel.set(next);
      setDistance(next);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [travel]);

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{ height: `calc(100svh + ${distance}px)` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-start gap-6 px-4 sm:gap-10 sm:px-8 lg:px-16"
        >
          <div className="w-[min(380px,80vw)] shrink-0 self-center">
            <Eyebrow className="mb-3">Case Studies</Eyebrow>
            <h2 className="text-4xl font-semibold sm:text-6xl">Selected Work</h2>
            <p className="mt-5 text-slate-300 sm:text-lg">
              A few projects that show how I approach product delivery, from early MVPs
              through to scalable production systems.
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
              Keep scrolling →
            </p>
          </div>
          {projects.map((project, i) => (
            <article key={project.href} className="group w-[min(720px,82vw)] shrink-0">
              <a href={project.href} className="relative block p-px" style={{ clipPath: CHAMFER }}>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-white/15 transition-colors duration-300 group-hover:bg-[#00fd35]"
                />
                <span
                  className="relative block bg-[#171616] px-5 pt-10 pb-5 sm:px-10 sm:pt-14 sm:pb-10"
                  style={{ clipPath: CHAMFER }}
                >
                  <span className="block overflow-hidden rounded-md">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={project.image.width}
                      height={project.image.height}
                      sizes="(min-width: 900px) 640px, 75vw"
                      className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </span>
                </span>
              </a>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  <a href={project.href} className="hover:line-through">
                    {project.title}
                  </a>
                </h3>
                <span className="font-mono text-xs text-slate-400">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>
              <p className="font-semibold text-[#00fd35]">{project.subtitle}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                “{project.impact}”
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </article>
          ))}
          <span aria-hidden="true" className="w-4 shrink-0 sm:w-16" />
        </motion.div>
        <div className="absolute inset-x-4 bottom-28 h-px bg-white/10 sm:inset-x-16 sm:bottom-20">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full origin-left bg-[#00fd35]"
          />
        </div>
      </div>
    </section>
  );
};

const STICKER_TEXT = "EMAIL ME • EMAIL ME • EMAIL ME • ";

// Full-bleed accent finale with a spinning sticker that chases the cursor.
const Finale = () => {
  const ref = useRef<HTMLElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 22 });
  const y = useSpring(0, { stiffness: 180, damping: 22 });

  const rest = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(rect.width * 0.72);
    y.set(rect.height * 0.62);
  };

  useLayoutEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.jump(rect.width * 0.72);
    y.jump(rect.height * 0.62);
  }, [x, y]);

  const follow = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <section
      ref={ref}
      onPointerMove={follow}
      onPointerLeave={rest}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-[#00fd35] px-4 pt-32 pb-24 text-black sm:px-8 lg:px-16"
    >
      <div className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em]">Let&apos;s build</p>
        <h2 className="mt-6 max-w-5xl text-6xl font-semibold leading-[0.92] sm:text-8xl lg:text-9xl">
          Want to work with me?
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block text-lg font-semibold underline decoration-2 underline-offset-4 hover:line-through sm:text-3xl"
        >
          {profile.email}
        </a>
      </div>
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 text-sm font-semibold">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex gap-6">
          <a href={profile.github} className="underline hover:line-through">
            GitHub
          </a>
          <a href={profile.linkedin} className="underline hover:line-through">
            LinkedIn
          </a>
        </div>
      </div>
      <motion.a
        href={`mailto:${profile.email}`}
        aria-label={`Email ${profile.email}`}
        style={{ x, y }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="absolute top-0 left-0 z-20 -mt-[72px] -ml-[72px] grid h-36 w-36 place-items-center rounded-full bg-black text-[#00fd35]"
      >
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite] motion-reduce:animate-none"
        >
          <defs>
            <path id="sticker-ring" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
          </defs>
          <text className="fill-current font-mono text-[9px] tracking-[0.18em]">
            <textPath href="#sticker-ring">{STICKER_TEXT}</textPath>
          </text>
        </svg>
        <span aria-hidden="true" className="text-3xl">
          ↗
        </span>
      </motion.a>
    </section>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-[#00fd35]"
    />
  );
};

export const Story = () => {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Statement />
      <Experience />
      <Work />
      <Finale />
    </>
  );
};
