"use client";

import { useSyncExternalStore } from "react";
import clsx from "clsx";
import { DOT_GRID_VARIANTS, DotGrid, DotGridVariant } from "./DotGrid";

// The active variant lives in `?bg=` (shareable) and localStorage (sticky).
// The switcher stays hidden until the terminal's `theme` easter egg reveals it.
const PARAM = "bg";
const STORAGE_KEY = "dot-grid-variant";
const SWITCHER_KEY = "dot-grid-switcher";
const CHANGE_EVENT = "dot-grid-variant-change";
export const DEFAULT_VARIANT: DotGridVariant = "comet";

export const isVariant = (value: string | null): value is DotGridVariant =>
  DOT_GRID_VARIANTS.some((variant) => variant.id === value);

const readStored = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeStored = (key: string, value: string | null) => {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable (private mode); the setting just won't stick.
  }
};

const readVariant = (): DotGridVariant => {
  const fromUrl = new URLSearchParams(window.location.search).get(PARAM);
  if (isVariant(fromUrl)) return fromUrl;
  const stored = readStored(STORAGE_KEY);
  return isVariant(stored) ? stored : DEFAULT_VARIANT;
};

export const isSwitcherVisible = () => readStored(SWITCHER_KEY) === "1";

const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("popstate", onChange);
  };
};

const notify = () => window.dispatchEvent(new Event(CHANGE_EVENT));

export const selectVariant = (variant: DotGridVariant) => {
  writeStored(STORAGE_KEY, variant);
  const url = new URL(window.location.href);
  url.searchParams.set(PARAM, variant);
  window.history.replaceState(null, "", url);
  notify();
};

export const setSwitcherVisible = (visible: boolean) => {
  writeStored(SWITCHER_KEY, visible ? "1" : null);
  notify();
};

export const useDotGridVariant = () =>
  useSyncExternalStore(subscribe, readVariant, () => DEFAULT_VARIANT);

export const Background = () => {
  const variant = useDotGridVariant();
  const showSwitcher = useSyncExternalStore(subscribe, isSwitcherVisible, () => false);

  return (
    <>
      <DotGrid variant={variant} />
      {showSwitcher && (
        <div
          role="group"
          aria-label="Background variant"
          className="fixed right-4 bottom-4 z-50 flex items-center gap-1 rounded-full border border-white/15 bg-[#171616]/90 p-1 text-xs backdrop-blur"
        >
          <span className="ml-2 mr-1 h-1.5 w-1.5 rounded-full bg-[#00fd35]" />
          {DOT_GRID_VARIANTS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={variant === id}
              onClick={() => selectVariant(id)}
              className={clsx(
                "cursor-pointer rounded-full px-3 py-1.5 transition-colors",
                variant === id
                  ? "bg-[#006b35] text-[#00fd35]"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
