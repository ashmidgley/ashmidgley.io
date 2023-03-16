"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import clsx from "clsx";
import { Badge } from "./Badge";

interface ProjectSummaryProps {
  className?: string;
  title: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  highlights: React.ReactNode[];
  technologies: string[];
}

export const ProjectSummary: FC<ProjectSummaryProps> = ({
  className,
  title,
  href,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  highlights,
  technologies,
}) => {
  return (
    <div
      className={clsx(
        "h-full flex flex-col sm:flex-row justify-center gap-12",
        className
      )}
    >
      <div className="flex flex-col justify-center sm:w-2/4">
        <Link href={href}>
          <motion.div whileHover={{ border: "3px solid #00fd35", borderRadius: "9px"}}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              priority
            />
          </motion.div>
        </Link>
      </div>
      <div className="flex flex-col justify-center sm:w-2/4 gap-6">
        <Link href={href}>
          <h2 className="text-lg underline sm:text-2xl text-center sm:text-left hover:line-through">
            {title}
          </h2>
        </Link>
        <ul className="flex flex-col gap-1 text-sm text-center sm:text-start sm:text-2xl">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-center sm:justify-start gap-y-3">
          {technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
