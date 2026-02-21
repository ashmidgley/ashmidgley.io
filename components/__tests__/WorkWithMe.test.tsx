import { render, screen } from "@testing-library/react";
import { WorkWithMe } from "../WorkWithMe";

describe("WorkWithMe", () => {
  it("renders CTA heading and email link", () => {
    render(<WorkWithMe />);

    expect(
      screen.getByRole("heading", { name: "Want to work with me?" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "ashleymidgley@gmail.com" })
    ).toHaveAttribute("href", "mailto:ashleymidgley@gmail.com");
  });
});
