import { render, screen } from "@testing-library/react";
import { SelectedWork } from "../SelectedWork";

describe("SelectedWork", () => {
  it("renders selected work section with project tiles", () => {
    render(<SelectedWork />);

    expect(screen.getByText("Case Studies")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Selected Work" })).toBeInTheDocument();
    expect(screen.getByText("geobuff.io")).toBeInTheDocument();
    expect(screen.getByText("rationalnomads.com")).toBeInTheDocument();
    expect(screen.getByText("boookshelf.xyz")).toBeInTheDocument();
    expect(screen.getByText("Geography Quiz Platform")).toBeInTheDocument();
    expect(screen.getByText("Rational Nomads")).toBeInTheDocument();
    expect(screen.getByText("Bookshelf")).toBeInTheDocument();
  });

  it("renders visit links, technologies, and project imagery", () => {
    render(<SelectedWork />);

    const visitLinks = screen.getAllByRole("link", { name: "Visit" });
    expect(visitLinks).toHaveLength(3);
    expect(visitLinks[0]).toHaveAttribute("href", "https://geobuff.io");
    expect(visitLinks[1]).toHaveAttribute("href", "https://nomads-site-chi.vercel.app");
    expect(visitLinks[2]).toHaveAttribute("href", "https://boookshelf.xyz");

    expect(screen.getByText("AWS ECS/RDS/EventBridge")).toBeInTheDocument();
    expect(screen.getByText("Chakra UI")).toBeInTheDocument();
    expect(screen.getByText("ASP.NET Core")).toBeInTheDocument();

    expect(screen.getByAltText("GeoBuff")).toBeInTheDocument();
    expect(screen.getByAltText("Rational Nomads")).toBeInTheDocument();
    expect(screen.getByAltText("Bookshelf")).toBeInTheDocument();
  });
});
