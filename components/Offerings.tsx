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
          <a
            href="https://www.typescriptlang.org"
            className="text-white font-semibold hover:line-through"
          >
            {"TypeScript"}
          </a>
          <span>{", "}</span>
          <a
            href="https://nextjs.org"
            className="text-white font-semibold hover:line-through"
          >
            {"Next.js"}
          </a>
          <span>{" and "}</span>
          <a
            href="https://vercel.com"
            className="text-white font-semibold hover:line-through"
          >
            {"Vercel"}
          </a>
          <span>{". Have an idea but "}</span>
          <a
            href="https://calendly.com/ashmidgley/chat"
            className="text-yellow-300 underline hover:line-through"
          >
            {"don't know where to start?"}
          </a>
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
          <a
            href="http://paulgraham.com/ds.html"
            className="text-green-300 underline hover:line-through"
          >
            {"vision"}
          </a>
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
