"use client";

import Link from "next/link";
import { Logo } from "./Logo";

export const Nav = () => {
  return (
    <div
      className="fixed w-full py-3 z-50"
      style={{
        backgroundColor: "rgba(0,0,0,0.30)",
        backdropFilter: "blur(9px)",
      }}
    >
      <div className="flex justify-center sm:justify-between sm:mx-6 md:mx-24 ">
        <Logo />
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
