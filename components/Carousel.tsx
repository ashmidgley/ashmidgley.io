"use client";

import clsx from "clsx";
import { Children, useMemo, useState } from "react";

interface CarouselProps {
  className?: string;
  children: React.ReactNode;
}

export const Carousel = ({ className, children }: CarouselProps) => {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  const moveToSlide = (index: number) => {
    if (!slides.length) {
      return;
    }

    const nextIndex = (index + slides.length) % slides.length;
    setActiveIndex(nextIndex);
  };

  return (
    <div className={className}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {hasMultipleSlides ? (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => moveToSlide(activeIndex - 1)}
            aria-label="Previous slide"
            className="rounded border border-white/40 px-3 py-1 text-xs uppercase tracking-wide transition-colors hover:border-white"
          >
            Prev
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => moveToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={clsx(
                  "h-2 w-2 rounded-full transition-colors",
                  index === activeIndex ? "bg-white" : "bg-white/30"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => moveToSlide(activeIndex + 1)}
            aria-label="Next slide"
            className="rounded border border-white/40 px-3 py-1 text-xs uppercase tracking-wide transition-colors hover:border-white"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};
