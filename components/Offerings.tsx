import Link from "next/link";
import { motion } from "framer-motion";
import { CursorIcon } from "./CursorIcon";

export const Offerings = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-row justify-center">
        <p className="text-slate-300 text-lg sm:text-4xl">
          <span>{"I build sites "}</span>
          <motion.a
            href="https://geobuff.com"
            className="inline-block"
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
            href="https://nextjs.org"
            className="text-white font-semibold hover:line-through"
          >
            {"Next.js"}
          </Link>
          <span>{" and "}</span>
          <Link
            href="https://vercel.com"
            className="text-white font-semibold hover:line-through"
          >
            {"Vercel"}
          </Link>
          <span>{". Have an idea but "}</span>
          <Link
            href="https://calendly.com/ashmidgley/chat"
            className="text-yellow-300 underline hover:line-through"
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
            className="text-green-300 underline hover:line-through"
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
