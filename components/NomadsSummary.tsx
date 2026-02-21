import { ProjectSummary } from "./ProjectSummary";

interface NomadsSummaryProps {
  className?: string;
}

export const NomadsSummary = ({ className }: NomadsSummaryProps) => (
  <ProjectSummary
    className={className}
    href="https://nz.linkedin.com/company/rationalnomads"
    title="rationalnomads.com"
    subtitle="Rational Nomads"
    imageUrl="/images/nomads.png"
    imageAlt="Rational Nomads"
    imageWidth={2366}
    imageHeight={1349}
    summary="Designed and developed the web presence for Rational Nomads with a focus on clear messaging, performance, and maintainable frontend foundations."
    impact="Shipped a polished client-facing experience that strengthened the collective's credibility and sales conversations."
    technologies={["Next.js", "TypeScript", "Chakra UI", "Vercel"]}
  />
);
