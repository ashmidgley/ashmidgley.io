"use client";

import { motion } from "framer-motion";
import { dropIn } from "./motion.utils";

export const OtherOfferingsSection = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <motion.div
        className="flex flex-row justify-center"
        variants={dropIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <p className="mx-6 md:mx-24 xl:mx-80 text-slate-300 text-lg sm:text-4xl">
          <span>{"I also offer independant programming services. "}</span>
          <span className="text-white font-semibold">
            {"Need an extra pair of hands on an existing project? "}
          </span>
          <a
            href="https://calendly.com/ashmidgley/chat"
            className="text-yellow-300 underline"
          >
            {"Let's talk"}
          </a>
          <span>{"."}</span>
        </p>
      </motion.div>
    </div>
  );
};
