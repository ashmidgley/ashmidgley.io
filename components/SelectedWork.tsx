import { RefObject, useEffect, useRef, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion } from "framer-motion";
import { ProjectSummary } from "./ProjectSummary";

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

export const SelectedWork = () => {
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

  const geoBuffTile = (
    <ProjectSummary
      href="https://geobuff.com"
      title="geobuff.com"
      imageUrl="/images/geobuff.png"
      imageAlt="GeoBuff"
      imageWidth={576}
      imageHeight={312}
      highlights={[
        "25,000+ quiz plays",
        "220+ users",
        "220+ iOS downloads",
        "10 languages",
      ]}
      technologies={[
        "Next.js",
        "TypeScript",
        "Chakra UI",
        "Vercel",
        "Go",
        "Google Cloud",
        "Circle CI",
        "PostgreSQL",
        "Digital Ocean",
        "React Native",
      ]}
    />
  );

  const nomadsTile = (
    <ProjectSummary
      href="https://rationalnomads.com"
      title="rationalnomads.com"
      imageUrl="/images/nomads.png"
      imageAlt="Rational Nomads"
      imageWidth={574}
      imageHeight={296}
      highlights={["Crafted for the team at Rational Nomads"]}
      technologies={["Next.js", "TypeScript", "Chakra UI", "Vercel"]}
    />
  );

  const desktop = (
    <div
      ref={elementRef as unknown as RefObject<HTMLDivElement>}
      className="h-[5000px] my-[500px]"
    >
      <div
        style={{
          position: "sticky",
          top: "50%",
          left: "50%",
          transform: `translateY(-250px)`,
        }}
      >
        <h1 className="text-lg sm:text-4xl text-center mb-24">Selected Work</h1>
        <div className="flex flex-col justify-center items-center gap-24">
          <div className="w-full flex flex-col justify-center">
            <div className="relative">
              <motion.div
                className="absolute h-[500px] w-full"
                animate={{ x: geoBuffX, opacity: geoBuffOpacity }}
                transition={{ duration: 1 }}
              >
                {geoBuffTile}
              </motion.div>
              <motion.div
                className="absolute h-[500px] w-full"
                animate={{ x: nomadsX, opacity: nomadsOpacity }}
                transition={{ duration: 1 }}
              >
                {nomadsTile}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const mobile = (
    <div>
      <h1 className="text-lg text-center mb-12">Selected Work</h1>
      <div className="flex flex-col justify-center items-center gap-24">
        {geoBuffTile}
        {nomadsTile}
      </div>
    </div>
  );
  return (
    <>
      <div className="hidden sm:block">{desktop}</div>
      <div className="block sm:hidden">{mobile}</div>
    </>
  );
};
