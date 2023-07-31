"use client";

import { FC } from "react";
import Link from "next/link";
import { BackArrow } from "./BackArrow";
import { motion } from "framer-motion";
import { GetJokeContainer } from "@/containers/GetJokeButtonContainer";

export const Footer: FC = () => (
  <div className="bg-white text-black flex justify-between sm:flex-row px-6 py-12 md:px-24">
    <div className="flex flex-col justify-center">
      <div className="flex gap-6 sm:gap-24">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold mb-2">Contact Me</h2>
          <Link href="mailto: ashleymidgley@gmail.com">
            <span className="underline hover:line-through">Email</span>
          </Link>
          <Link href="https://calendly.com/ashmidgley/chat">
            <span className="underline hover:line-through">Book a meeting</span>
          </Link>
        </div>
        <GetJokeContainer />
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold mb-2">Follow</h2>
          <Link href="https://github.com/ashmidgley">
            <span className="underline hover:line-through">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/ashley-midgley">
            <span className="underline hover:line-through">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
    <motion.button
      whileHover={{ y: -10 }}
      onClick={() => window && window.scrollTo(0, 0)}
    >
      <BackArrow />
    </motion.button>
  </div>
);
