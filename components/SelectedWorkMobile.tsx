import { Carousel } from "react-responsive-carousel";
import { ProjectSummary } from "./ProjectSummary";

export const SelectedWorkMobile = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-lg text-center mb-12">Selected Work</h1>
      <Carousel showStatus={false} showIndicators={false}>
        <ProjectSummary
          href="https://geobuff.com"
          title="geobuff.com"
          imageUrl="/images/geobuff.png"
          imageAlt="GeoBuff"
          imageWidth={576}
          imageHeight={312}
          highlights={[
            "25,000+ quiz plays",
            "220+ users",
            "220+ iOS downloads",
            "10 languages",
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
        <ProjectSummary
          href="https://rationalnomads.com"
          title="rationalnomads.com"
          imageUrl="/images/nomads.png"
          imageAlt="Rational Nomads"
          imageWidth={574}
          imageHeight={296}
          highlights={["Crafted for the team at Rational Nomads"]}
          technologies={["Next.js", "TypeScript", "Chakra UI", "Vercel"]}
        />
      </Carousel>
    </div>
  );
};
