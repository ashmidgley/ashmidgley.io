import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Terminal } from "@/components/Terminal";
import { profile } from "@/lib/content";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://ashmidgley.io",
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-stack software engineer building pragmatic web products with Next.js, React, TypeScript, and backend systems.",
  sameAs: [profile.github, profile.linkedin],
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
      <Background />
      <Header />
      <main>
        <Terminal />
      </main>
    </>
  );
}
