import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { KeyOne } from "./KeyOne";
import { KeyTwo } from "./KeyTwo";

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
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 0.4,
              times: [0, 0.4, 1],
              delay: 0.4,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <KeyOne />
          </motion.div>
          <motion.div
            className="inline-block -ml-9"
            animate={{ y: [10, 30, 10] }}
            transition={{
              duration: 0.4,
              times: [0, 0.4, 1],
              delay: 0.8,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <KeyTwo />
          </motion.div>
        </motion.a>
        <div className="hidden sm:flex sm:flex-col sm:justify-center">
          <div className="flex gap-6">
            <a
              href="https://github.com/ashmidgley"
              className="text-white hover:line-through"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashley-midgley/"
              className="text-white hover:line-through"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
