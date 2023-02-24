"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const KeyboardAnimation = () => {
  const { scrollY } = useScroll();

  const [src, setSrc] = useState("/images/Keyboard-1.png");
  const [currIndex, setCurrIndex] = useState(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (currIndex !== 12 && currIndex === 11 && latest > 5000) {
      setSrc(`/images/Keyboard-12.png`);
      setCurrIndex(12);
      return;
    }

    const index = Math.ceil(latest / 300);
    if (index !== 0 && index !== currIndex && index < 12) {
      setSrc(`/images/Keyboard-${index}.png`);
      setCurrIndex(index);
    }
  });

  return (
    <div className="relative">
    <motion.div className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        <Image src={src} alt="keyboard" width={2405} height={987} priority />
      </motion.div>
    </div>
  );
};
