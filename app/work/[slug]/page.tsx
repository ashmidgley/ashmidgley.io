import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/CaseStudyPage";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

interface CaseStudyRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: {
      absolute: caseStudy.seoTitle,
    },
    description: caseStudy.seoDescription,
    alternates: {
      canonical: caseStudy.route,
    },
    openGraph: {
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      url: caseStudy.route,
      images: [
        {
          url: caseStudy.imageUrl,
          width: caseStudy.imageWidth,
          height: caseStudy.imageHeight,
          alt: caseStudy.imageAlt,
        },
      ],
    },
  };
}

export default async function CaseStudyRoute({ params }: CaseStudyRouteProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage caseStudy={caseStudy} />;
}
