import { ProjectSummary } from "./ProjectSummary";

interface BookshelfSummaryProps {
  className?: string;
}

export const BookshelfSummary = ({ className }: BookshelfSummaryProps) => (
  <ProjectSummary
    className={className}
    imageClassName="rounded-tl-md rounded-tr-md"
    href="https://boookshelf.xyz"
    title="boookshelf.xyz"
    subtitle="Bookshelf"
    imageUrl="/images/bookshelf.png"
    imageAlt="Bookshelf"
    imageWidth={2366}
    imageHeight={1349}
    summary="Built a monorepo reading app with a React UI and an .NET Core API backed by SQL Server, with Docker-based local and hot-reload workflows."
    impact="Set up reproducible delivery with Terraform-managed AWS infrastructure, health endpoints, and versioned ECR image releases."
    technologies={[
      "React",
      ".NET Core",
      "EF Core",
      "SQL Server",
      "Docker Compose",
      "Terraform",
      "AWS EC2/ECR",
    ]}
  />
);
