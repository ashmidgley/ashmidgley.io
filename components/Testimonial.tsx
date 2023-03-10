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
      <p className="text-sm sm:text-lg font-semibold">{message}</p>
      <div className="flex gap-6">
        <Image
          className="rounded-full"
          src={imageUrl}
          alt={`${name} profile`}
          width={80}
          height={80}
          priority
        />
        <div className="flex flex-col justify-center">
          <div className="flex text-xs sm:text-sm">
            <span className="mr-1">{name}</span>
            <span>{"•"}</span>
            <span className="italic ml-1">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
