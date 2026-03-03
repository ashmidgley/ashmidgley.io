export interface CaseStudy {
  slug: string;
  route: `/work/${string}`;
  siteUrl: string;
  siteLabel: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  summary: string;
  impact: string;
  technologies: string[];
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  seoTitle: string;
  seoDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "geobuff",
    route: "/work/geobuff",
    siteUrl: "https://geobuff.io",
    siteLabel: "geobuff.io",
    title: "geobuff.io",
    subtitle: "Geography Quiz Platform",
    imageUrl: "/images/geobuff.png",
    imageAlt: "GeoBuff",
    imageWidth: 2366,
    imageHeight: 1349,
    summary:
      "Built a multilingual geography quiz product spanning web and mobile, with a strong focus on gameplay quality and scalable content delivery.",
    impact:
      "Reached 30,000+ quiz plays, 250+ users, 250+ iOS downloads, and received a Phase One incubator invitation.",
    technologies: [
      "Next.js",
      "Go",
      "PostgreSQL",
      "Terraform",
      "AWS ECS/RDS/EventBridge",
    ],
    heroKicker: "Case Study",
    heroTitle: "GeoBuff",
    heroDescription:
      "A geography quiz product designed to make practice feel fast, playful, and repeatable across web and mobile.",
    challenge:
      "The product needed to feel lightweight for casual users while still supporting multilingual content, a growing quiz catalogue, and infrastructure that could stay cheap to run.",
    approach: [
      "Built the main product experience in Next.js with a strong focus on quick session starts and low-friction quiz flows.",
      "Designed backend services in Go and PostgreSQL to support quiz delivery, content changes, and reliable progression rules.",
      "Used Terraform and AWS infrastructure to keep deployment repeatable as the product moved from experiment to something people returned to.",
    ],
    outcomes: [
      "Drove more than 30,000 quiz plays while the product was still early.",
      "Reached 250+ registered users and 250+ iOS downloads.",
      "Helped the project earn a Phase One incubator invitation, validating the concept beyond hobby scale.",
    ],
    seoTitle: "GeoBuff Case Study | Ash Midgley",
    seoDescription:
      "How Ash Midgley built GeoBuff, a multilingual geography quiz platform using Next.js, Go, PostgreSQL, Terraform, and AWS.",
  },
  {
    slug: "rational-nomads",
    route: "/work/rational-nomads",
    siteUrl: "https://nomads-site-chi.vercel.app",
    siteLabel: "rationalnomads.com",
    title: "rationalnomads.com",
    subtitle: "Rational Nomads",
    imageUrl: "/images/nomads.png",
    imageAlt: "Rational Nomads",
    imageWidth: 2366,
    imageHeight: 1349,
    summary:
      "Designed and developed the web presence for Rational Nomads with a focus on clear messaging, performance, and maintainable frontend foundations.",
    impact:
      "Shipped a polished client-facing experience that strengthened the collective's credibility and sales conversations.",
    technologies: ["Next.js", "TypeScript", "Chakra UI", "Vercel"],
    heroKicker: "Case Study",
    heroTitle: "Rational Nomads",
    heroDescription:
      "A marketing site built to make the collective's positioning clearer, sharper, and easier to sell through.",
    challenge:
      "The site had to explain a nuanced offering quickly, feel credible for prospective clients, and stay easy to evolve as messaging changed.",
    approach: [
      "Structured the site around direct positioning, clearer conversion paths, and tighter information hierarchy.",
      "Used Next.js and TypeScript to keep the codebase maintainable while shipping a polished frontend quickly.",
      "Deployed on Vercel to simplify previews and shorten the feedback loop for copy and design changes.",
    ],
    outcomes: [
      "Delivered a more credible public-facing presence for the collective.",
      "Improved clarity in sales conversations by making the offer easier to understand upfront.",
      "Left the site in a state that could be iterated on without expensive rebuilds.",
    ],
    seoTitle: "Rational Nomads Case Study | Ash Midgley",
    seoDescription:
      "How Ash Midgley designed and built the Rational Nomads marketing site with Next.js, TypeScript, Chakra UI, and Vercel.",
  },
  {
    slug: "bookshelf",
    route: "/work/bookshelf",
    siteUrl: "https://boookshelf.xyz",
    siteLabel: "boookshelf.xyz",
    title: "boookshelf.xyz",
    subtitle: "Bookshelf",
    imageUrl: "/images/bookshelf.png",
    imageAlt: "Bookshelf",
    imageWidth: 2366,
    imageHeight: 1349,
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
    heroKicker: "Case Study",
    heroTitle: "Bookshelf",
    heroDescription:
      "A reading application built as a production-minded monorepo with a React frontend, a typed API layer, and reproducible infrastructure.",
    challenge:
      "The goal was to create a development setup that stayed productive locally while still resembling the real production shape closely enough to trust deployment changes.",
    approach: [
      "Split the system into a React frontend and an ASP.NET Core API backed by SQL Server.",
      "Used Docker Compose to support local parity, hot reload, and simpler onboarding across services.",
      "Defined delivery infrastructure with Terraform and AWS so releases, health checks, and image versioning were repeatable.",
    ],
    outcomes: [
      "Created a stack that was easy to run locally and realistic enough for production validation.",
      "Reduced deployment guesswork by standardising infrastructure and release mechanics.",
      "Produced a cleaner foundation for iterating on product features without reworking the platform each time.",
    ],
    seoTitle: "Bookshelf Case Study | Ash Midgley",
    seoDescription:
      "How Ash Midgley built Bookshelf using React, ASP.NET Core, SQL Server, Docker Compose, Terraform, and AWS.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
