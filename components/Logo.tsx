"use client";

import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";
import { AKey } from "./AKey";
import { MKey } from "./MKey";
import { MKeyFlipped } from "./MKeyFlipped";

const subscribeToScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

// A boolean snapshot, so scrolling only re-renders when crossing the top.
const isScrolled = () => window.scrollY > 0;

// The A/M keycaps: they take turns bouncing at the top of the page and settle,
// with the M flipped, once the page scrolls.
export const Logo = () => {
  const scrolled = useSyncExternalStore(subscribeToScroll, isScrolled, () => false);

  return (
    <motion.a href="/" aria-label="Ash Midgley, home">
      <motion.div
        className="inline-block"
        animate={scrolled ? undefined : { y: [0, 15, 0] }}
        transition={
          scrolled
            ? undefined
            : {
                duration: 0.4,
                times: [0, 0.4, 1],
                delay: 0.4,
                repeat: Infinity,
                repeatDelay: 3,
              }
        }
      >
        <AKey />
      </motion.div>

      {!scrolled ? (
        <motion.div
          className="inline-block -ml-4"
          animate={{ y: [6, 21, 6] }}
          transition={{
            duration: 0.4,
            times: [0, 0.4, 1],
            delay: 0.8,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <MKey />
        </motion.div>
      ) : (
        <div className="inline-block translate-y-1 -ml-3">
          <MKeyFlipped />
        </div>
      )}
    </motion.a>
  );
};
