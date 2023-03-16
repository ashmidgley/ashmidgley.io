import { FC } from "react";
import { Testimonial } from "./Testimonial";

interface StacyTestimonialProps {
  className?: string;
}

export const StacyTestimonial: FC = ({ className }) => {
  return (
    <Testimonial
      className={className}
      message="Ash has delivered consistently high-quality work for Nomads while working from Thailand, Indonesia and all over New Zealand. He’s been a great addition to the culture of our team and I’d highly recommend him for any position."
      imageUrl="/images/stacy.jpeg"
      name="Stacy Hunt"
      title="Founder, Rational Nomads"
    />
  );
};
