"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import clsx from "clsx";
import { Badge } from "./Badge";

interface ProjectSummaryProps {
  className?: string;
  imageClassName?: string;
  title: string;
  subtitle: string;
  liveHref: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  summary: string;
  impact: string;
  technologies: string[];
}

export const ProjectSummary: FC<ProjectSummaryProps> = ({
  className,
  imageClassName,
  title,
  subtitle,
  liveHref,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  summary,
  impact,
  technologies,
}) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx("rounded-xl border border-white/15 bg-[#171616] p-5 sm:p-6", className)}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="sm:w-2/4">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <Link href={liveHref} className="hover:line-through">
                <h3 className="text-lg font-semibold leading-tight sm:text-xl">
                  {title}
                </h3>
              </Link>
              <p className="text-sm font-semibold text-[#00fd35] sm:text-base">
                {subtitle}
              </p>
            </div>
            <Link
              href={liveHref}
              aria-label={`Visit ${title}`}
              className="shrink-0 text-right text-xs text-slate-400 underline hover:line-through sm:text-sm"
            >
              Visit
            </Link>
          </div>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {summary}
          </p>

          <p className="mt-4 border-l-2 border-[#00fd35] pl-3 text-sm leading-relaxed text-white sm:text-base">
            {impact}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </div>

        <div className="sm:w-2/4">
          {/* Duplicate of the title link for mouse users; kept out of the tab order. */}
          <Link href={liveHref} className="block" tabIndex={-1} aria-hidden="true">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              // Half the card, after section margins, card padding and gap at each breakpoint.
              sizes="(min-width: 1536px) calc(50vw - 360px), (min-width: 768px) calc(50vw - 136px), (min-width: 640px) calc(50vw - 64px), calc(100vw - 88px)"
              className={imageClassName}
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
