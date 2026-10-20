"use client";

import { MotionConfig } from "framer-motion";

// Honours the visitor's "reduce motion" setting for every framer-motion animation.
export const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
