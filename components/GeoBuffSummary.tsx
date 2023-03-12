import { ProjectSummary } from "./ProjectSummary";

export const GeoBuffSummary = () => (
  <ProjectSummary
    href="https://geobuff.com"
    title="geobuff.com"
    imageUrl="/images/geobuff.png"
    imageAlt="GeoBuff"
    imageWidth={2366}
    imageHeight={1349}
    highlights={[
      <p key={0}>
        <span className="font-semibold">25,000+</span> quiz plays
      </p>,
      <p key={1}>
        <span className="font-semibold">220+</span> users
      </p>,
      <p key={2}>
        <span className="font-semibold">220+</span> iOS downloads
      </p>,
      <p key={3}>
        <span className="font-semibold">10</span> languages
      </p>,
    ]}
    technologies={[
      "Next.js",
      "TypeScript",
      "Chakra UI",
      "Vercel",
      "Go",
      "Google Cloud",
      "PostgreSQL",
      "React Native",
    ]}
  />
);
