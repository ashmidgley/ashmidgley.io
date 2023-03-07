"use client";

import { Testimonial } from "./Testimonial";

export const Testimonials = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="mx-6 md:mx-24 xl:mx-80">
        <h1 className="text-white text-center text-3xl mb-24">
          A word from my clients...
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-24">
          <Testimonial
            className="w-full sm:w-1/2"
            message="Nem consequam faces con plabore, quodit, ut libus ullorrovid unt molum, sam, vellique doluptur, toreheni autem quasit aborrovit reperum is aut et rerferro."
            imageUrl="/images/jacob.jpeg"
            name="Jacob Duligall"
            title="Co-founder, Latch"
          />
          <Testimonial
            className="w-full sm:w-1/2"
            message="Ash has delivered consistently high-quality work for Nomads while working from Thailand, Indonesia and all over New Zealand. He’s been a great addition to the culture of our team and I’d highly recommend him for any position."
            imageUrl="/images/stacy.jpeg"
            name="Stacy Hunt"
            title="Founder, Rational Nomads"
          />
        </div>
      </div>
    </div>
  );
};
