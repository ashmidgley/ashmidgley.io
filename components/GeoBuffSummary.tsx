import Link from "next/link";
import { ProjectSummary } from "./ProjectSummary";

export const GeoBuffSummary = () => (
  <ProjectSummary
    href="https://geobuff.io"
    title="geobuff.io"
    imageUrl="/images/geobuff.png"
    imageAlt="GeoBuff"
    imageWidth={2366}
    imageHeight={1349}
    highlights={[
      <p key={0}>
        <span className="font-semibold">30,000+</span> quiz plays
      </p>,
      <p key={1}>
        <span className="font-semibold">250+</span> users
      </p>,
      <p key={2}>
        <span className="font-semibold">250+</span> iOS downloads
      </p>,
      <p key={4}>
        Invited to join the{" "}
        <Link href="https://www.phaseone.ventures">
          {" "}
          <span className="underline hover:line-through">Phase One</span>
        </Link>{" "}
        startup incubator introductory program.
      </p>
    ]}
    technologies={[
      "Next.js",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "AWS",
      "Vercel",
    ]}
  />
);
