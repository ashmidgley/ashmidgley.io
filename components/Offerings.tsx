"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CursorIcon } from "./CursorIcon";

export const Offerings = () => {
  return (
    <div className="flex flex-col h-screen justify-center mx-6 md:mx-24 xl:mx-80">
      <div className="flex flex-row justify-center">
        <p className="text-slate-300 text-lg sm:text-4xl">
          <span>{"I build web applications "}</span>
          <motion.a
            className="hidden md:inline-block"
            href="https://kanexa.net"
            whileHover={{ scale: 1.5 }}
          >
            <CursorIcon />
          </motion.a>
          <span>{" using "}</span>
          <Link
            href="https://www.typescriptlang.org"
            className="text-white font-semibold hover:line-through"
          >
            {"TypeScript"}
          </Link>
          <span>{", "}</span>
          <Link
            href="https://react.dev"
            className="text-white font-semibold hover:line-through"
          >
            {"React"}
          </Link>
          <span>{" and "}</span>
          <Link
            href="https://nodejs.org"
            className="text-white font-semibold hover:line-through"
          >
            {"Node.js"}
          </Link>
          <span>{". Have an idea but "}</span>
          <Link
            href="mailto: ashleymidgley@gmail.com"
            className="text-[#00fd35] underline hover:line-through"
          >
            {"don't know where to start?"}
          </Link>
          <span>
            {" Together we can coordinate with my network of highly skilled "}
          </span>
          <span className="text-white inline font-semibold hover:italic">
            {"Graphic"}
          </span>
          <span>{" and "}</span>
          <span className="text-white font-semibold hover:italic">
            {"UI/UX designers"}
          </span>
          <span>{" to take your "}</span>
          <Link
            href="http://paulgraham.com/ds.html"
            className="text-[#00fd35] underline hover:line-through"
          >
            {"vision"}
          </Link>
          <span>{" from "}</span>
          <span className="text-white font-semibold hover:italic">
            {"idea to inception"}
          </span>
          <span>{"."}</span>
        </p>
      </div>
    </div>
  );
};
