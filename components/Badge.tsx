import { FC } from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: FC<BadgeProps> = ({ children }) => (
  <span className="rounded border border-[#00fd35] bg-[#006b35] px-2.5 py-0.5 text-xs font-medium text-[#00fd35]">
    {children}
  </span>
);
