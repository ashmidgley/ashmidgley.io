import Image from "next/image";
import Link from "next/link";

import { CaseStudy } from "@/lib/caseStudies";

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

export const CaseStudyPage = ({ caseStudy }: CaseStudyPageProps) => {
  return (
    <article className="mx-6 pt-32 pb-24 md:mx-24 md:pt-40 md:pb-32 xl:mx-24 2xl:mx-80">
      <header className="max-w-4xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          {caseStudy.heroKicker}
        </p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
          {caseStudy.heroTitle}
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-xl">
          {caseStudy.heroDescription}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm sm:text-base">
          <Link
            href={caseStudy.siteUrl}
            className="underline hover:line-through"
          >
            Visit live project
          </Link>
          <Link href="/work" className="underline hover:line-through">
            Back to case studies
          </Link>
        </div>
      </header>

      <div className="mt-12 overflow-hidden rounded-xl border border-white/15 bg-[#171616]">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.imageAlt}
          width={caseStudy.imageWidth}
          height={caseStudy.imageHeight}
        />
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-white/15 bg-[#171616] p-6 lg:col-span-2">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#00fd35]">
            Challenge
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-lg">
            {caseStudy.challenge}
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-[#171616] p-6">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#00fd35]">
            Stack
          </p>
          <ul className="space-y-2 text-sm text-slate-300 sm:text-base">
            {caseStudy.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-white/15 bg-[#171616] p-6 sm:p-8">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          Approach
        </p>
        <ul className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-lg">
          {caseStudy.approach.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-white/15 bg-[#171616] p-6 sm:p-8">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          Outcomes
        </p>
        <ul className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-lg">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};
