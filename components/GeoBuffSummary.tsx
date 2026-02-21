import { ProjectSummary } from "./ProjectSummary";

interface GeoBuffSummaryProps {
  className?: string;
}

export const GeoBuffSummary = ({ className }: GeoBuffSummaryProps) => (
  <ProjectSummary
    className={className}
    href="https://geobuff.io"
    title="geobuff.io"
    subtitle="Geography Quiz Platform"
    imageUrl="/images/geobuff.png"
    imageAlt="GeoBuff"
    imageWidth={2366}
    imageHeight={1349}
    summary="Built a multilingual geography quiz product spanning web and mobile, with a strong focus on gameplay quality and scalable content delivery."
    impact="Reached 30,000+ quiz plays, 250+ users, 250+ iOS downloads, and received a Phase One incubator invitation."
    technologies={[
      "Next.js",
      "Go",
      "PostgreSQL",
      "Terraform",
      "AWS ECS/RDS/EventBridge",
    ]}
  />
);
