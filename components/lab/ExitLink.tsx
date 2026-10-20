import Link from "next/link";

// The way back out of the hidden modes the terminal launches.
export const ExitLink = () => (
  <Link
    href="/"
    className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-[#171616]/90 px-4 py-2 font-mono text-xs text-white backdrop-blur transition-colors hover:border-[#00fd35] hover:text-[#00fd35]"
  >
    <span className="text-[#00fd35]">➜</span> <span className="text-slate-400">~</span> exit
  </Link>
);
