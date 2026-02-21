import { render, screen } from "@testing-library/react";
import { SelectedWork } from "../SelectedWork";

describe("SelectedWork", () => {
  it("renders selected work section with project tiles", () => {
    render(<SelectedWork />);

    expect(screen.getByText("Case Studies")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Selected Work" })).toBeInTheDocument();
    expect(screen.getByText("geobuff.io")).toBeInTheDocument();
    expect(screen.getByText("rationalnomads.com")).toBeInTheDocument();
    expect(screen.getByText("Geography Quiz Platform")).toBeInTheDocument();
    expect(screen.getByText("Rational Nomads")).toBeInTheDocument();
  });

  it("renders visit links, technologies, and project imagery", () => {
    render(<SelectedWork />);

    const visitLinks = screen.getAllByRole("link", { name: "Visit" });
    expect(visitLinks).toHaveLength(2);
    expect(visitLinks[0]).toHaveAttribute("href", "https://geobuff.io");
    expect(visitLinks[1]).toHaveAttribute(
      "href",
      "https://nz.linkedin.com/company/rationalnomads"
    );

    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Chakra UI")).toBeInTheDocument();

    expect(screen.getByAltText("GeoBuff")).toBeInTheDocument();
    expect(screen.getByAltText("Rational Nomads")).toBeInTheDocument();
  });
});
