import clsx from "clsx";
import { profile } from "@/lib/content";
import { Logo } from "./Logo";

interface HeaderProps {
  className?: string;
}

// Fixed logo + email call to action shared by the terminal and its hidden modes.
export const Header = ({ className }: HeaderProps) => (
  <header
    className={clsx(
      "pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-3 sm:px-8",
      className
    )}
  >
    <div className="pointer-events-auto">
      <Logo />
    </div>
    <a
      href={`mailto:${profile.email}`}
      className="pointer-events-auto rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:bg-[#00fd35]"
    >
      Email me
    </a>
  </header>
);
