// Site copy shared by the homepage and the /lab landing page variants.

export const profile = {
  name: "Ash Midgley",
  email: "ashleymidgley@gmail.com",
  github: "https://github.com/ashmidgley",
  linkedin: "https://www.linkedin.com/in/ashley-midgley/",
  eyebrow: "Software engineer",
  headline: "Hey, I'm Ash. I tick PR's and talk to Claude. :wq",
  intro:
    "These days I'm building at Go Places. Before that: Kanexa, Xero, and a stretch of freelancing.",
};

export interface Experience {
  role: string;
  company: string;
  dates: string;
  summary: string;
  impact: string;
  stack: string[];
}

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Go Places",
    dates: "Aug 2025 — Current",
    summary:
      "Built an internal booking platform from scratch for the Live Shopping team, replacing brittle forms and a manual ClickUp calendar workflow.",
    impact:
      "Shipped in 6 months and now used by 200+ internal staff, external presenters, and producers.",
    stack: ["Deno", "AWS SNS/SQS/ECS", "GCP", "Neo4j", "Next.js"],
  },
  {
    role: "Senior Software Engineer",
    company: "Kanexa",
    dates: "Oct 2023 — Aug 2025",
    summary:
      "Helped build a fintech platform from zero, shaping frontend architecture and delivering full-stack features across document flows and payment automation.",
    impact:
      "Led frontend direction, mentored backend-leaning engineers, and accelerated delivery with reusable web components.",
    stack: ["React", "Node.js", "TypeScript", "Web Components"],
  },
  {
    role: "Freelance Software Engineer",
    company: "Self-employed",
    dates: "Jun 2022 — Sep 2023",
    summary:
      "Delivered product work for startup clients, including legal-tech and Web3 teams, with a focus on practical integrations and fast MVP execution.",
    impact:
      "Built a DocuSign integration that helped one client land its first 10 customers.",
    stack: ["Next.js", "Vercel", "Integrations", "Product MVPs"],
  },
  {
    role: "Software Engineer",
    company: "Xero",
    dates: "Jul 2021 — Jun 2022",
    summary:
      "Worked on Business Snapshot in the Insights and Reporting team, shipping dashboard features that made key financial metrics easier to explore.",
    impact:
      "Delivered features end-to-end, mentored junior engineers, and regularly presented team progress.",
    stack: ["React", "Redux", "XUI"],
  },
];

export interface Project {
  title: string;
  subtitle: string;
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  summary: string;
  impact: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "geobuff.ai",
    subtitle: "Geography Quiz Platform",
    href: "https://geobuff.ai",
    image: { src: "/images/geobuff.png", alt: "GeoBuff", width: 2365, height: 1349 },
    summary:
      "Built a multilingual geography quiz product spanning web and mobile, with a strong focus on gameplay quality and scalable content delivery.",
    impact:
      "Reached 30,000+ quiz plays, 250+ users, 250+ iOS downloads, and received a Phase One incubator invitation.",
    technologies: ["Next.js", "Go", "PostgreSQL", "Terraform", "AWS ECS/RDS/EventBridge"],
  },
  {
    title: "boookshelf.xyz",
    subtitle: "Bookshelf",
    href: "https://boookshelf.xyz/shelf/1",
    image: {
      src: "/images/bookshelf.png",
      alt: "Bookshelf",
      width: 2880,
      height: 1506,
      className: "rounded-tl-md rounded-tr-md",
    },
    summary:
      "Built a monorepo reading app with a React UI and an ASP.NET Core API backed by SQL Server, with Docker-based local and hot-reload workflows.",
    impact:
      "Set up reproducible delivery with Terraform-managed AWS infrastructure, health endpoints, and versioned ECR image releases.",
    technologies: [
      "React",
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      "Docker Compose",
      "Terraform",
      "AWS EC2/ECR",
    ],
  },
];

// The headline technologies, each with how many roles and projects used it.
// Most used first; ties keep this list's order.
const STACK: { name: string; matches: (technology: string) => boolean }[] = [
  { name: "Next.js", matches: (t) => t === "Next.js" },
  { name: "React", matches: (t) => t === "React" },
  { name: "Terraform", matches: (t) => t === "Terraform" },
  { name: "TypeScript", matches: (t) => t === "TypeScript" },
  { name: "GCP", matches: (t) => t === "GCP" },
  { name: "AWS", matches: (t) => t.startsWith("AWS") },
  { name: "Deno", matches: (t) => t === "Deno" },
  { name: "Docker Compose", matches: (t) => t === "Docker Compose" },
  { name: "Neo4j", matches: (t) => t === "Neo4j" },
  { name: "Node.js", matches: (t) => t === "Node.js" },
  { name: "PostgreSQL", matches: (t) => t === "PostgreSQL" },
  { name: "Vercel", matches: (t) => t === "Vercel" },
];

export const stack = (() => {
  const used = [...experiences.map((e) => e.stack), ...projects.map((p) => p.technologies)];
  return STACK.map(({ name, matches }) => ({
    name,
    count: used.filter((technologies) => technologies.some(matches)).length,
  })).sort((a, b) => b.count - a.count);
})();
