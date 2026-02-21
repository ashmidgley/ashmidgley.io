"use client";

import { motion } from "framer-motion";
import { Badge } from "./Badge";

interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  summary: string;
  impact: string;
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Go Places",
    dates: "Aug 2025 — Current",
    summary:
      "Built an internal booking platform from scratch for the Live Shopping team, replacing brittle forms and a manual ClickUp calendar workflow.",
    impact:
      "Shipped in 6 months and now used by 200+ internal staff, external presenters, and producers.",
    stack: ["Deno", "AWS SNS/SQS/ECS", "Neo4j", "Next.js"],
  },
  {
    role: "Senior Software Engineer",
    company: "Kanexa",
    dates: "Oct 2023 — Aug 2025",
    summary:
      "Helped build a fintech platform from zero, shaping frontend architecture and delivering full-stack features across document flows and payment automation.",
    impact:
      "Led frontend direction, mentored backend-leaning engineers, and accelerated delivery with reusable web components.",
    stack: ["React", "Node.js", "TypeScript", "Web Components"],
  },
  {
    role: "Freelance Software Engineer",
    company: "Self-employed",
    dates: "Jun 2022 — Sep 2023",
    summary:
      "Delivered product work for startup clients, including legal-tech and Web3 teams, with a focus on practical integrations and fast MVP execution.",
    impact:
      "Built a DocuSign integration that helped one client land its first 10 customers.",
    stack: ["Next.js", "Integrations", "Product MVPs"],
  },
  {
    role: "Software Engineer",
    company: "Xero",
    dates: "Jul 2021 — Jun 2022",
    summary:
      "Worked on Business Snapshot in the Insights and Reporting team, shipping dashboard features that made key financial metrics easier to explore.",
    impact:
      "Delivered features end-to-end, mentored junior engineers, and regularly presented team progress.",
    stack: ["React", "Redux", "XUI"],
  },
];

export const PreviousExperience = () => {
  return (
    <section className="mx-6 py-24 md:mx-24 md:py-32 xl:mx-24 2xl:mx-80">
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
