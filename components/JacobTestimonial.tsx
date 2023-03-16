import { FC } from "react";
import { Testimonial } from "./Testimonial";

interface JacobTestimonialProps {
  className?: string;
}

export const JacobTestimonial: FC<JacobTestimonialProps> = ({ className }) => {
  return (
    <Testimonial
      className={className}
      message="Ash jumped in to help us ship an important integration during the run up to onboarding a big client. He nailed it and we loved having him as part of the team."
      imageUrl="/images/jacob.jpeg"
      name="Jacob Duligall"
      title="Co-founder, Latch"
    />
  );
};
