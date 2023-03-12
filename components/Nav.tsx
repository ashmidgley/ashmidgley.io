"use client";

import Link from "next/link";
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
    <div
      className="fixed w-full py-3 z-50"
      style={{
        backgroundColor: "rgba(0,0,0,0.30)",
        backdropFilter: "blur(9px)",
      }}
    >
      <div className="flex justify-center sm:justify-between sm:mx-6 md:mx-24 ">
        <motion.a href="/">
          <motion.div
            className="inline-block"
            animate={scrollPosition > 0 ? undefined : { y: [0, 15, 0] }}
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
        <div className="hidden sm:flex sm:flex-col sm:justify-center">
          <div className="flex gap-6">
            <Link
              href="https://github.com/ashmidgley"
              className="hover:line-through"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashley-midgley/"
              className="hover:line-through"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
