import { ProjectSummary } from "./ProjectSummary";

export const NomadsSummary = () => (
  <ProjectSummary
    href="https://rationalnomads.com"
    title="rationalnomads.com"
    imageUrl="/images/nomads.png"
    imageAlt="Rational Nomads"
    imageWidth={2366}
    imageHeight={1349}
    highlights={["Crafted for the team at Rational Nomads"]}
    technologies={["Next.js", "TypeScript", "Chakra UI", "Vercel"]}
  />
);
