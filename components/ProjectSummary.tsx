import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import clsx from "clsx";
import { isMobile } from "react-device-detect";

interface ProjectSummaryProps {
  className?: string;
  title: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  highlights: string[];
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
        "flex flex-col sm:flex-row justify-center gap-12",
        className
      )}
    >
      <div className="flex flex-col justify-center sm:w-2/4">
        <Link href={href}>
          <motion.div whileHover={isMobile ? undefined : { scale: 1.1 }}>
            <Image
              className="rounded-lg"
              src={imageUrl}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
            />
          </motion.div>
        </Link>
      </div>
      <div className="flex flex-col justify-center sm:w-2/4 gap-6">
        <Link href={href}>
          <h2 className="text-2xl font-semibold text-center sm:text-left hover:line-through">
            {title}
          </h2>
        </Link>
        <ul className="flex flex-col gap-3 text-md sm:text-2xl">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-y-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
