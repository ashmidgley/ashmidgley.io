"use client";

import { RefObject, useRef, useState } from "react";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export const KeyboardAnimation = () => {
  const elementRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <div ref={elementRef as unknown as RefObject<HTMLDivElement>} className="h-[5000px] mb-[500px]">
      <div className="sticky top-20">
        <div className="mx-12 md:mx-24 xl:mx-80 flex flex-col justify-center items-center gap-12">
          <div className="w-full flex flex-col justify-center">
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="relative">
              <Image
                className="absolute"
                src={"/images/keyboard-1.png"}
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
                  src={"/images/keyboard-2.png"}
                  alt="keyboard"
                  width={2405}
                  height={987}
                  priority
                  style={{
                    opacity: scrollProgress / 100,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
