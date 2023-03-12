"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion } from "framer-motion";
import { GeoBuffSummary } from "./GeoBuffSummary";
import { NomadsSummary } from "./NomadsSummary";

const getGeoBuffOpacity = (scrollProgress: number): number => {
  return scrollProgress > 2 ? 1 : 0;
};

const getGeoBuffX = (scrollProgress: number): number => {
  return scrollProgress >= 48 ? 2000 : 0;
};

const getNomadsOpacity = (scrollProgress: number): number => {
  return scrollProgress < 98 ? 1 : 0;
};

const getNomadsX = (scrollProgress: number): number => {
  return scrollProgress < 52 ? 2000 : 0;
};

export const SelectedWorkDesktop = () => {
  const elementRef = useRef();

  const [scrollProgress, setScrollProgress] = useState(0);

  const [geoBuffOpacity, setGeoBuffOpacity] = useState(0);
  const [geoBuffX, setGeoBuffX] = useState(0);

  const [nomadsOpacity, setNomadsOpacity] = useState(0);
  const [nomadsX, setNomadsX] = useState(0);

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

  useEffect(() => {
    setGeoBuffOpacity(getGeoBuffOpacity(scrollProgress));
    setGeoBuffX(getGeoBuffX(scrollProgress));
    setNomadsOpacity(getNomadsOpacity(scrollProgress));
    setNomadsX(getNomadsX(scrollProgress));
  }, [scrollProgress]);

  return (
    <div
      ref={elementRef as unknown as RefObject<HTMLDivElement>}
      className="h-[5000px] my-[500px] mx-24"
    >
      <div
        style={{
          position: "sticky",
          top: "50%",
          left: "50%",
          transform: `translateY(-250px)`,
        }}
      >
        <h1 className="text-lg sm:text-4xl text-center font-semibold mb-24">
          Selected Work
        </h1>
        <div className="flex flex-col justify-center items-center gap-24">
          <div className="w-full flex flex-col justify-center">
            <div className="relative">
              <motion.div
                className="absolute h-[500px] w-full"
                animate={{ x: geoBuffX, opacity: geoBuffOpacity }}
                transition={{ duration: 1 }}
              >
                <GeoBuffSummary />
              </motion.div>
              <motion.div
                className="absolute h-[500px] w-full"
                animate={{ x: nomadsX, opacity: nomadsOpacity }}
                transition={{ duration: 1 }}
              >
                <NomadsSummary />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
