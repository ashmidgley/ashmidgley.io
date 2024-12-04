import Link from "next/link";
import { ProjectSummary } from "./ProjectSummary";

export const GeoBuffSummary = () => (
  <ProjectSummary
    href="https://web.archive.org/web/20220625135246/https://www.geobuff.com/"
    title="geobuff.com"
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
      <p key={3}>
        <span className="font-semibold">10</span> languages
      </p>,
      <p key={4}>
        Invited to join the{" "}
        <Link href="https://www.phaseone.ventures">
          {" "}
          <span className="underline hover:line-through">Phase One</span>
        </Link>{" "}
        startup incubator introductory program.
      </p>,
      <p key={5}>
        {`Shutdown in 2023 as unable to generate enough revenue to cover mounting hosting costs.`}
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
