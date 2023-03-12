"use client";

import { Carousel } from "react-responsive-carousel";
import { GeoBuffSummary } from "./GeoBuffSummary";
import { NomadsSummary } from "./NomadsSummary";

export const SelectedWorkMobile = () => {
  return (
    <div className="h-screen flex flex-col justify-center mx-6">
      <Carousel showStatus={false} showIndicators={false}>
        <GeoBuffSummary />
        <NomadsSummary />
      </Carousel>
    </div>
  );
};
