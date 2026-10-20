"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/content";
import { Badge } from "./Badge";

export const PreviousExperience = () => {
  return (
    <section className="mx-6 py-24 md:mx-24 md:py-32 2xl:mx-80">
      <div className="mb-10 sm:mb-12">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          Career Snapshot
        </p>
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Previous Work Experience
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-lg">
          Four roles where I shipped products end-to-end, improved team velocity,
          and built systems that lasted.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {experiences.map((experience) => (
          <motion.article
            key={`${experience.company}-${experience.dates}`}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-xl border border-white/15 bg-[#171616] p-5 sm:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold leading-tight sm:text-xl">
                  {experience.role}
                </h3>
                <p className="text-sm font-semibold text-[#00fd35] sm:text-base">
                  {experience.company}
                </p>
              </div>
              <p className="shrink-0 text-right text-xs text-slate-400 sm:text-sm">
                {experience.dates}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {experience.summary}
            </p>

            <p className="mt-4 border-l-2 border-[#00fd35] pl-3 text-sm leading-relaxed text-white sm:text-base">
              {experience.impact}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {experience.stack.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
