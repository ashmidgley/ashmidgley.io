import type { MetadataRoute } from "next";

import { caseStudies } from "@/lib/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://ashmidgley.io",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ashmidgley.io/work",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: `https://ashmidgley.io${caseStudy.route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
