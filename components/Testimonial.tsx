import { FC } from "react";
import Image from "next/image";
import clsx from "clsx";

interface TestimonialProps {
  className?: string;
  imageUrl: string;
  name: string;
  title: string;
  message: string;
}

export const Testimonial: FC<TestimonialProps> = ({
  className,
  imageUrl,
  name,
  title,
  message,
}) => {
  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <p className="text-sm sm:text-lg font-semibold text-left">{message}</p>
      <div className="flex justify-center sm:justify-start gap-6">
        <Image
          className="rounded-full max-w-[80px] sm:max-w-none"
          src={imageUrl}
          alt={`${name} profile`}
          width={80}
          height={80}
          priority
        />
        <div className="flex flex-col justify-center text-xs sm:text-sm gap-1 text-left">
          <span className="font-semibold">{name}</span>
          <span className="italic">{title}</span>
        </div>
      </div>
    </div>
  );
};
