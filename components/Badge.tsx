import { FC } from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: FC<BadgeProps> = ({ children }) => (
  <span className="bg-[#006b35] text-[#00fd35] border border-[#00fd35] rounded text-xs font-medium mr-2 px-2.5 py-0.5">
    {children}
  </span>
);
