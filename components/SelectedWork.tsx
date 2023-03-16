"use client";

import { Carousel } from "react-responsive-carousel";
import { GeoBuffSummary } from "./GeoBuffSummary";
import { NomadsSummary } from "./NomadsSummary";

export const SelectedWork = () => {
  return (
    <div className="h-screen flex flex-col justify-center mx-6 sm:mx-24">
      <h1 className="text-lg sm:text-4xl text-center font-semibold mb-12 sm:mb-24">
        Selected Work
      </h1>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        <GeoBuffSummary />
        <NomadsSummary />
      </Carousel>
    </div>
  );
};
