"use client";

import { Carousel } from "react-responsive-carousel";
import { JacobTestimonial } from "./JacobTestimonial";
import { StacyTestimonial } from "./StacyTestimonial";

export const Testimonials = () => {
  return (
    <div className="flex flex-col h-screen justify-center mx-6 md:mx-24 xl:mx-80">
      <div>
        <h1 className="text-center font-semibold text-lg sm:text-4xl mb-12 sm:mb-24">
          A word from my clients...
        </h1>
        <div className="hidden sm:block">
          <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-24">
            <StacyTestimonial className="w-full sm:w-1/2" />
            <JacobTestimonial className="w-full sm:w-1/2" />
          </div>
        </div>
        <div className="block sm:hidden">
          <Carousel
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            <JacobTestimonial />
            <StacyTestimonial />
          </Carousel>
        </div>
      </div>
    </div>
  );
};
