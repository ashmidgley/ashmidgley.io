import { SelectedWork } from "@/components/SelectedWork";
import { PreviousExperience } from "@/components/PreviousExperience";
import { WorkWithMe } from "@/components/WorkWithMe";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ash Midgley",
  url: "https://ashmidgley.io",
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-stack software engineer building pragmatic web products with Next.js, React, TypeScript, and backend systems.",
  sameAs: [
    "https://github.com/ashmidgley",
    "https://www.linkedin.com/in/ashley-midgley/",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Product engineering",
    "Web application architecture",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <header className="mx-6 pt-32 pb-16 md:mx-24 md:pt-40 md:pb-20 lg:flex lg:min-h-screen lg:flex-col lg:justify-center xl:mx-24 2xl:mx-80">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#00fd35] sm:text-sm">
          Product Engineering
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          Full-stack software engineer for teams shipping web products that need
          to move faster.
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-xl">
          I build and improve production web apps across frontend, backend, and
          delivery infrastructure, with a focus on clear product outcomes,
          maintainable systems, and faster execution.
        </p>
      </header>
      <PreviousExperience />
      <SelectedWork />
      <WorkWithMe />
    </>
  );
}
