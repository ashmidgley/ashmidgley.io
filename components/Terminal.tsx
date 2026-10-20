"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { experiences, profile, projects, stack } from "@/lib/content";
import {
  isSwitcherVisible,
  isVariant,
  selectVariant,
  setSwitcherVisible,
  useDotGridVariant,
} from "./Background";
import { DOT_GRID_VARIANTS } from "./DotGrid";

interface Command {
  name: string;
  aliases: string[];
  description: string;
  render: () => React.ReactNode;
}

interface Entry {
  id: number;
  input: string;
  output: React.ReactNode;
}

const TYPE_DELAY = 55;

const rise = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
});

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-[#00fd35]">
    {children}
  </code>
);

const Whoami = () => (
  <motion.div {...rise(0)}>
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#00fd35]">
      {profile.eyebrow}
    </p>
    <h1 className="text-3xl font-semibold leading-[1.08] sm:text-5xl">{profile.headline}</h1>
    <p className="mt-5 max-w-2xl leading-relaxed text-slate-300 sm:text-lg">{profile.intro}</p>
    <p className="mt-6 text-sm text-slate-400">
      Poke around, everything here is a command. Start with <Code>experience</Code>, or{" "}
      <Code>help</Code> if you get lost.
    </p>
  </motion.div>
);

// Stable fake commit hashes, so server and client render the same thing.
const shortHash = (seed: string) => {
  let hash = 2166136261;
  for (const char of seed) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
};

// Roles as `git log --graph`: newest first, current role at HEAD.
const ExperienceOutput = () => (
  <div className="font-mono text-sm leading-6">
    {experiences.map((experience, i) => {
      const last = i === experiences.length - 1;
      return (
        <motion.div key={experience.company} {...rise(i)} className="relative pl-7 pb-7 last:pb-0">
          {!last && (
            <span aria-hidden="true" className="absolute top-3 bottom-0 left-[5px] w-px bg-[#006b35]" />
          )}
          <span
            aria-hidden="true"
            className={clsx(
              "absolute top-[7px] left-0 h-[11px] w-[11px] rounded-full border-2 border-[#00fd35]",
              i === 0 ? "bg-[#00fd35]" : "bg-[#171616]"
            )}
          />
          <p className="flex flex-wrap items-baseline gap-x-3">
            <span className="text-[#00fd35]">{shortHash(experience.company + experience.dates)}</span>
            {i === 0 && <span className="text-[#00fd35]/70">(HEAD -&gt; current)</span>}
            <span className="font-semibold text-white">
              {experience.role} <span className="text-slate-500">@</span>{" "}
              <span className="text-[#00fd35]">{experience.company}</span>
            </span>
            <span className="text-xs text-slate-500 sm:ml-auto">{experience.dates}</span>
          </p>
          <p className="mt-2 text-slate-300">{experience.summary}</p>
          <p className="mt-2 text-white">
            <span className="text-[#00fd35]">+ </span>
            {experience.impact}
          </p>
          <p className="mt-2 text-xs text-slate-500">{experience.stack.join(" · ")}</p>
        </motion.div>
      );
    })}
  </div>
);

// One `tree` branch; the lines are CSS so they follow wrapped text.
const Branch = ({ last, children }: { last: boolean; children: React.ReactNode }) => (
  <div className="relative pl-6">
    <span
      aria-hidden="true"
      className={clsx("absolute top-0 left-[6px] w-px bg-white/20", last ? "h-3" : "h-full")}
    />
    <span aria-hidden="true" className="absolute top-3 left-[6px] h-px w-3.5 bg-white/20" />
    {children}
  </div>
);

// Projects as `tree ~/projects`, with a screenshot preview pane on hover.
const WorkOutput = () => (
  <div className="font-mono text-sm leading-6">
    <p className="text-slate-400">~/projects</p>
    {projects.map((project, i) => {
      const rows: [string, React.ReactNode][] = [
        ["what", <span key="what" className="text-slate-300">{project.summary}</span>],
        ["impact", <span key="impact" className="text-white">{project.impact}</span>],
        ["stack", <span key="stack" className="text-slate-500">{project.technologies.join(" · ")}</span>],
        [
          "open",
          <a key="open" href={project.href} className="text-[#00fd35] underline-offset-4 hover:underline">
            {project.href.replace(/^https:\/\//, "")} ↗
          </a>,
        ],
      ];
      return (
        <motion.div key={project.href} {...rise(i)} className="group relative lg:pr-80">
          <Branch last={i === projects.length - 1}>
            <p className="pb-1">
              <a href={project.href} className="font-semibold text-[#00fd35] underline-offset-4 hover:underline">
                {project.title}/
              </a>{" "}
              <span className="text-slate-500"># {project.subtitle}</span>
            </p>
            <div className={i === projects.length - 1 ? "" : "pb-4"}>
              {rows.map(([label, value], row) => (
                <Branch key={label} last={row === rows.length - 1}>
                  <p className="grid gap-x-2 sm:grid-cols-[4.5rem_1fr]">
                    <span className="text-slate-500">{label}</span>
                    {value}
                  </p>
                </Branch>
              ))}
            </div>
          </Branch>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 hidden w-72 translate-x-2 overflow-hidden rounded-lg border border-white/15 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block"
          >
            <div className="flex items-center gap-1 border-b border-white/10 bg-black/40 px-2 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#006b35]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#00fd35]" />
              <span className="ml-2 truncate text-[10px] text-slate-500">preview: {project.title}</span>
            </div>
            <Image
              src={project.image.src}
              alt=""
              width={project.image.width}
              height={project.image.height}
              sizes="288px"
            />
          </div>
        </motion.div>
      );
    })}
    <p className="mt-3 hidden text-xs text-slate-500 lg:block">
      Hover a project to preview it.
    </p>
  </div>
);

const StackOutput = () => {
  const top = stack[0]?.count ?? 1;
  return (
    <div className="space-y-1.5 font-mono text-xs">
      {stack.map(({ name, count }, i) => (
        <div key={name} className="grid grid-cols-[minmax(0,11rem)_1fr_2rem] items-center gap-3">
          <span className="truncate text-slate-300">{name}</span>
          <span className="h-2 overflow-hidden rounded-full bg-white/5">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / top }}
              transition={{ duration: 0.6, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="block h-full origin-left rounded-full bg-gradient-to-r from-[#006b35] to-[#00fd35]"
            />
          </span>
          <span className="text-right text-slate-400">×{count}</span>
        </div>
      ))}
    </div>
  );
};

const ContactOutput = () => (
  <motion.div {...rise(0)} className="rounded-xl bg-[#00fd35] p-6 text-black sm:p-8">
    <p className="font-mono text-xs uppercase tracking-[0.2em]">Let&apos;s build</p>
    <p className="mt-3 text-3xl font-semibold sm:text-5xl">Want to work with me?</p>
    <a
      href={`mailto:${profile.email}`}
      className="mt-5 inline-block text-lg font-semibold underline hover:line-through"
    >
      {profile.email}
    </a>
    <div className="mt-6 flex gap-5 font-mono text-sm">
      <a href={profile.github} className="underline hover:line-through">
        github ↗
      </a>
      <a href={profile.linkedin} className="underline hover:line-through">
        linkedin ↗
      </a>
    </div>
  </motion.div>
);

const COMMANDS: Command[] = [
  {
    name: "whoami",
    aliases: ["about", "me"],
    description: "Who I am and what I do",
    render: () => <Whoami />,
  },
  {
    name: "experience",
    aliases: ["exp", "jobs", "cv"],
    description: "Roles I've shipped in",
    render: () => <ExperienceOutput />,
  },
  {
    name: "work",
    aliases: ["projects"],
    description: "Selected projects",
    render: () => <WorkOutput />,
  },
  {
    name: "stack",
    aliases: ["tech", "skills"],
    description: "Technologies, by how often I've used them",
    render: () => <StackOutput />,
  },
  {
    name: "contact",
    aliases: ["email", "hire"],
    description: "Get in touch",
    render: () => <ContactOutput />,
  },
];

const HelpOutput = () => (
  <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 font-mono text-sm">
    {COMMANDS.map((command) => (
      <div key={command.name} className="contents">
        <span className="text-[#00fd35]">{command.name}</span>
        <span className="text-slate-400">{command.description}</span>
      </div>
    ))}
    <span className="text-[#00fd35]">ls</span>
    <span className="text-slate-400">List everything here</span>
    <span className="text-[#00fd35]">clear</span>
    <span className="text-slate-400">Clear the screen</span>
  </div>
);

// Easter eggs: hidden directories that switch the whole site into another mode.
const MODES = [
  {
    name: "story",
    href: "/lab/story",
    description: "the site as a scroll-through story",
    triggers: ["cd .story", "cd .story/", "cd story", "man ash"],
  },
  {
    name: "canvas",
    href: "/lab/canvas",
    description: "the site as a desk of draggable cards",
    triggers: ["cd .canvas", "cd .canvas/", "cd canvas", "startx"],
  },
];

const LAUNCH_DELAY = 1100;

const findMode = (input: string) => MODES.find((mode) => mode.triggers.includes(input));

const Listing = ({ all }: { all: boolean }) => (
  <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 font-mono text-sm">
    {all &&
      MODES.map((mode) => (
        <div key={mode.name} className="contents">
          <span className="text-[#00fd35]">.{mode.name}/</span>
          <span className="text-slate-500"># {mode.description}</span>
        </div>
      ))}
    {all && (
      <>
        <span className="text-[#00fd35]">.theme</span>
        <span className="text-slate-500"># background hover effects, run `theme`</span>
      </>
    )}
    {COMMANDS.filter((command) => command.name !== "whoami").map((command) => (
      <div key={command.name} className="contents">
        <span>{command.name}</span>
        <span className="text-slate-500"># {command.description.toLowerCase()}</span>
      </div>
    ))}
  </div>
);

const Launch = ({ name }: { name: string }) => (
  <div className="space-y-2 font-mono text-sm">
    <p className="text-slate-400">
      Switching to <span className="text-[#00fd35]">{name}</span> mode…
    </p>
    <span className="block h-1.5 w-56 overflow-hidden rounded-full bg-white/10">
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: LAUNCH_DELAY / 1000, ease: "easeInOut" }}
        className="block h-full origin-left bg-[#00fd35]"
      />
    </span>
  </div>
);

// Easter egg: toggles the background effect switcher and picks an effect.
const ThemeOutput = ({ visible, message }: { visible: boolean; message?: string }) => {
  const current = useDotGridVariant();
  return (
    <div className="space-y-3 font-mono text-sm">
      {message && <p className="text-[#00fd35]">{message}</p>}
      <p className="text-slate-400">
        {visible
          ? "Hover effect switcher shown, bottom right. Run `theme` again to hide it."
          : "Hover effect switcher hidden."}
      </p>
      <div className="flex flex-wrap gap-2">
        {DOT_GRID_VARIANTS.map(({ id }) => (
          <button
            key={id}
            type="button"
            aria-pressed={id === current}
            onClick={() => selectVariant(id)}
            className={clsx(
              "cursor-pointer rounded-md border px-3 py-1 transition-colors",
              id === current
                ? "border-[#00fd35] bg-[#006b35] text-[#00fd35]"
                : "border-white/15 text-slate-300 hover:border-[#00fd35] hover:text-[#00fd35]"
            )}
          >
            {id === current ? "●" : "○"} {id}
          </button>
        ))}
      </div>
      <p className="text-slate-500">
        Or set one directly, e.g. <Code>theme sonar</Code>
      </p>
    </div>
  );
};

const runTheme = (input: string): React.ReactNode => {
  if (input === "theme" || input === "cat .theme") {
    const visible = !isSwitcherVisible();
    setSwitcherVisible(visible);
    return <ThemeOutput visible={visible} />;
  }
  const name = input.slice("theme ".length).trim();
  if (!isVariant(name)) {
    return (
      <p className="font-mono text-sm text-slate-400">
        theme: unknown effect: <span className="text-white">{name}</span>. Try{" "}
        {DOT_GRID_VARIANTS.map(({ id }) => id).join(", ")}.
      </p>
    );
  }
  selectVariant(name);
  return <ThemeOutput visible={isSwitcherVisible()} message={`Hover effect set to ${name}.`} />;
};

const isThemeCommand = (input: string) =>
  input === "theme" || input === "cat .theme" || input.startsWith("theme ");

const findCommand = (input: string) =>
  COMMANDS.find((command) => command.name === input || command.aliases.includes(input));

const complete = (input: string) =>
  input
    ? [...COMMANDS.map((command) => command.name), "help", "clear"].find((name) =>
        name.startsWith(input)
      )
    : undefined;

const editDistance = (a: string, b: string) => {
  let previous = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    previous = current;
  }
  return previous[b.length];
};

// The closest command name, if the input looks like a typo of one.
const suggest = (input: string) => {
  const names = [...COMMANDS.flatMap((command) => [command.name, ...command.aliases]), "help", "clear"];
  const [best] = names
    .map((name) => ({ name, distance: editDistance(input, name) }))
    .sort((a, b) => a.distance - b.distance);
  return best && best.distance <= 2 ? (findCommand(best.name)?.name ?? best.name) : undefined;
};

const execute = (raw: string): React.ReactNode => {
  const input = raw.trim().toLowerCase();
  if (input === "help") return <HelpOutput />;
  if (input === "ls") return <Listing all={false} />;
  if (input === "ls -a" || input === "ls -la" || input === "ls -al") return <Listing all />;
  if (input.startsWith("cd ")) {
    return (
      <p className="font-mono text-sm text-slate-400">
        cd: no such file or directory: <span className="text-white">{raw.trim().slice(3)}</span>
      </p>
    );
  }
  if (input === "sudo hire-ash" || input === "sudo hire ash") {
    return (
      <div className="space-y-4">
        <p className="font-mono text-sm text-slate-400">
          [sudo] password for visitor: ••••••••{" "}
          <span className="text-[#00fd35]">✓ access granted</span>
        </p>
        <ContactOutput />
      </div>
    );
  }
  const command = findCommand(input);
  if (command) return command.render();
  const suggestion = suggest(input);
  return (
    <p className="font-mono text-sm text-slate-400">
      zsh: command not found: <span className="text-white">{raw.trim()}</span>.{" "}
      {suggestion ? (
        <>
          Did you mean <Code>{suggestion}</Code>?
        </>
      ) : (
        <>
          Try <Code>help</Code>.
        </>
      )}
    </p>
  );
};

const Prompt = () => (
  <span aria-hidden="true" className="shrink-0 font-mono text-sm">
    <span className="text-[#00fd35]">➜</span> <span className="text-slate-400">~</span>
  </span>
);

const BOOT_COMMAND = "whoami";

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

// The site as a shell: commands print the site's sections on demand.
export const Terminal = () => {
  const router = useRouter();
  // The intro is in the initial render so its copy ships in the server HTML;
  // the boot sequence types the command over it and then reveals the output.
  const [entries, setEntries] = useState<Entry[]>(() => [
    { id: 0, input: BOOT_COMMAND, output: <Whoami /> },
  ]);
  const [booted, setBooted] = useState(false);
  const [bootTyped, setBootTyped] = useState("");
  const [value, setValue] = useState("");
  const [typing, setTyping] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const nextId = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const latestRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const run = useCallback(
    (raw: string) => {
      const input = raw.trim();
      setValue("");
      setCursor(-1);
      if (!input) return;
      setHistory((past) => [...past, input]);
      if (input.toLowerCase() === "clear") {
        setEntries([]);
        return;
      }
      const lower = input.toLowerCase();
      if (isThemeCommand(lower)) {
        // Run outside the state updater: it writes to storage and the URL.
        const output = runTheme(lower);
        setEntries((past) => [...past, { id: nextId.current++, input, output }]);
        return;
      }
      const mode = findMode(lower);
      if (mode) {
        setEntries((past) => [
          ...past,
          { id: nextId.current++, input, output: <Launch name={mode.name} /> },
        ]);
        router.prefetch(mode.href);
        timers.current.push(
          setTimeout(() => router.push(mode.href), prefersReducedMotion() ? 0 : LAUNCH_DELAY)
        );
        return;
      }
      setEntries((past) => [...past, { id: nextId.current++, input, output: execute(input) }]);
    },
    [router]
  );

  // Types the command into the prompt character by character, then runs it.
  const typeAndRun = useCallback(
    (command: string) => {
      timers.current.forEach(clearTimeout);
      const reduced = prefersReducedMotion();
      const delay = reduced ? 0 : TYPE_DELAY;
      setTyping(true);
      timers.current = [...command].map((_, i) =>
        setTimeout(() => setValue(command.slice(0, i + 1)), delay * (i + 1))
      );
      timers.current.push(
        setTimeout(() => {
          setTyping(false);
          run(command);
          if (window.matchMedia?.("(pointer: fine)").matches) inputRef.current?.focus();
        }, delay * (command.length + 1) + (reduced ? 0 : 220))
      );
    },
    [run]
  );

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const start = reduced ? 0 : 500;
    const delay = reduced ? 0 : TYPE_DELAY;
    const boot = [...BOOT_COMMAND].map((_, i) =>
      setTimeout(() => setBootTyped(BOOT_COMMAND.slice(0, i + 1)), start + delay * (i + 1))
    );
    boot.push(
      setTimeout(
        () => setBooted(true),
        start + delay * (BOOT_COMMAND.length + 1) + (reduced ? 0 : 220)
      )
    );
    const pending = timers;
    return () => {
      boot.forEach(clearTimeout);
      pending.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (entries.length > 1) latestRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [entries]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      run(value);
    } else if (event.key === "Tab") {
      const match = complete(value.trim().toLowerCase());
      if (match) {
        event.preventDefault();
        setValue(match);
      }
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      if (!history.length) return;
      event.preventDefault();
      const step = event.key === "ArrowUp" ? -1 : 1;
      const from = cursor === -1 ? history.length : cursor;
      const next = Math.min(history.length, Math.max(0, from + step));
      setCursor(next === history.length ? -1 : next);
      setValue(history[next] ?? "");
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-3 pt-24 pb-44 sm:px-6">
      <div
        onClick={() => {
          if (!window.getSelection()?.toString()) inputRef.current?.focus();
        }}
        className="overflow-hidden rounded-2xl border border-white/15 bg-[#171616]/95 shadow-[0_40px_120px_-40px_rgba(0,253,53,0.2)] backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-[#006b35]" />
          <span className="h-3 w-3 rounded-full bg-[#00fd35]" />
          <span className="mx-auto font-mono text-[11px] text-slate-400">visitor@ashmidgley.io: ~</span>
          <span className="w-[52px]" />
        </div>

        <div role="log" aria-live="polite" className="space-y-10 p-5 sm:p-8">
          {entries.map((entry, i) => {
            const booting = entry.id === 0 && !booted;
            return (
              <div
                key={entry.id}
                ref={i === entries.length - 1 ? latestRef : undefined}
                className="scroll-mt-24 space-y-5"
              >
                <p className="flex items-center gap-3 font-mono text-sm">
                  <Prompt />
                  <span>{booting ? bootTyped : entry.input}</span>
                  {booting && (
                    <span aria-hidden="true" className="-ml-2 h-4 w-2 animate-pulse bg-[#00fd35]" />
                  )}
                </p>
                <div
                  className={
                    booting
                      ? "translate-y-4 opacity-0"
                      : "translate-y-0 opacity-100 transition duration-500 ease-out"
                  }
                >
                  {entry.output}
                </div>
              </div>
            );
          })}

          <label className={booted ? "flex items-center gap-3" : "hidden"}>
            <Prompt />
            <span className="sr-only">Command</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={onKeyDown}
              readOnly={typing}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              placeholder={typing ? "" : "type a command…"}
              className="min-w-0 flex-1 bg-transparent font-mono text-sm caret-[#00fd35] outline-none placeholder:text-slate-600"
            />
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
          Try
        </span>
        {[...COMMANDS.map((command) => command.name).filter((name) => name !== "whoami"), "help", "clear"].map(
          (name) => (
            <button
              key={name}
              type="button"
              disabled={typing || !booted}
              onClick={() => typeAndRun(name)}
              className="cursor-pointer rounded-full border border-white/15 bg-[#171616]/80 px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-[#00fd35] hover:text-[#00fd35] disabled:cursor-wait disabled:opacity-50"
            >
              {name}
            </button>
          )
        )}
      </div>
    </div>
  );
};
