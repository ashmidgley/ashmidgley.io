import { render, screen } from "@testing-library/react";
import { PreviousExperience } from "../PreviousExperience";

describe("PreviousExperience", () => {
  it("renders section heading and all experience tiles", () => {
    render(<PreviousExperience />);

    expect(screen.getByText("Career Snapshot")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Previous Work Experience" })).toBeInTheDocument();

    expect(screen.getAllByText("Senior Software Engineer")).toHaveLength(2);
    expect(screen.getByText("Freelance Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();

    expect(screen.getByText("Go Places")).toBeInTheDocument();
    expect(screen.getByText("Kanexa")).toBeInTheDocument();
    expect(screen.getByText("Self-employed")).toBeInTheDocument();
    expect(screen.getByText("Xero")).toBeInTheDocument();
  });

  it("renders stack badges for experience cards", () => {
    render(<PreviousExperience />);

    expect(screen.getByText("Deno")).toBeInTheDocument();
    expect(screen.getByText("AWS SNS/SQS/ECS")).toBeInTheDocument();
    expect(screen.getByText("Web Components")).toBeInTheDocument();
    expect(screen.getByText("XUI")).toBeInTheDocument();
  });
});
