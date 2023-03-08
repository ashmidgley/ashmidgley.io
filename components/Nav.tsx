"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AKey } from "./AKey";
import { MKey } from "./MKey";
import { MKeyFlipped } from "./MKeyFlipped";

export const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full mt-6">
      <div
        className="flex justify-center sm:justify-between sm:mx-6 md:mx-24 xl:mx-80"
        style={{
          opacity: scrollPosition > 0 ? 0.6 : 1,
        }}
      >
        <motion.a href="/">
          <motion.div
            className="inline-block"
            animate={scrollPosition > 0 ? undefined : { y: [0, 20, 0] }}
            transition={
              scrollPosition > 0
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

          {scrollPosition === 0 ? (
            <motion.div
              className="inline-block -ml-7"
              animate={{ y: [13, 33, 13] }}
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
            <div className="inline-block translate-y-2 -ml-6">
              <MKeyFlipped />
            </div>
          )}
        </motion.a>
        <div className="hidden sm:flex sm:flex-col sm:justify-center">
          <div className="flex gap-6">
            <a
              href="https://github.com/ashmidgley"
              className="hover:line-through"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashley-midgley/"
              className="hover:line-through"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
