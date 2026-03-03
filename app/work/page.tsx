import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Case studies covering product engineering work across SaaS, marketing sites, and full-stack application delivery.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="mx-6 pt-32 pb-24 md:mx-24 md:pt-40 md:pb-32 xl:mx-24 2xl:mx-80">
      <header className="pb-10 md:pb-12">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          Portfolio
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          Case studies from product, platform, and delivery work.
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-xl">
          A closer look at projects spanning SaaS, marketing sites, and
          production-ready application stacks.
        </p>
      </header>

      <div className="space-y-6">
        {caseStudies.map((caseStudy) => (
          <article
            key={caseStudy.slug}
            className="overflow-hidden rounded-xl border border-white/15 bg-[#171616]"
          >
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
                  {caseStudy.subtitle}
                </p>
                <h2 className="text-2xl font-semibold sm:text-4xl">
                  <Link href={caseStudy.route} className="hover:line-through">
                    {caseStudy.heroTitle}
                  </Link>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-lg">
                  {caseStudy.summary}
                </p>
                <p className="mt-4 border-l-2 border-[#00fd35] pl-3 text-sm leading-relaxed text-white sm:text-base">
                  {caseStudy.impact}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm sm:text-base">
                  <Link
                    href={caseStudy.route}
                    className="underline hover:line-through"
                  >
                    Read case study
                  </Link>
                  <Link
                    href={caseStudy.siteUrl}
                    className="underline hover:line-through"
                  >
                    Visit live project
                  </Link>
                </div>
              </div>

              <Link href={caseStudy.route} className="block">
                <Image
                  src={caseStudy.imageUrl}
                  alt={caseStudy.imageAlt}
                  width={caseStudy.imageWidth}
                  height={caseStudy.imageHeight}
                  className="rounded-xl"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
