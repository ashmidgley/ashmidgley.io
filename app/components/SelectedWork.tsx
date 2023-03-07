"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion } from "framer-motion";
import { dropIn } from "../utils/motion.utils";

export const SelectedWork = () => {
  const elementRef = useRef();
  const imageRef = useRef();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    imageRef &&
      imageRef.current &&
      setImageHeight(imageRef.current["clientHeight"]);
  }, []);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > 0) return;

      const progress = Math.ceil((Math.abs(currPos.y) / 5000) * 100);
      if (progress !== scrollProgress) {
        setScrollProgress(progress);
      }
    },
    [],
    elementRef
  );

  return (
    <motion.div
      ref={elementRef as unknown as RefObject<HTMLDivElement>}
      className="h-[5000px] my-[500px]"
      variants={dropIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div
        style={{
          position: "sticky",
          top: "50%",
          left: "50%",
          transform: `translateY(-${imageHeight / 2}px)`,
        }}
      >
        <div className="mx-6 md:mx-24 xl:mx-80 flex flex-col justify-center items-center gap-12">
          <div className="w-full flex flex-col justify-center">
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center">
            <motion.div className="relative" whileTap={{ scale: 0.9 }}>
              <Image
                ref={imageRef as unknown as RefObject<HTMLImageElement>}
                className="absolute"
                src={"/images/keyboard-one.png"}
                alt="keyboard"
                width={2405}
                height={987}
                priority
                style={{
                  opacity: 1 - scrollProgress / 100,
                }}
              />
              {scrollProgress < 100 && (
                <Image
                  className="absolute"
                  src={"/images/keyboard-two.png"}
                  alt="keyboard"
                  width={2405}
                  height={987}
                  priority
                  style={{
                    opacity: scrollProgress / 100,
                  }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
