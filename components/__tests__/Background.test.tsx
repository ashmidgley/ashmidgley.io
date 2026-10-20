import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Background } from "../Background";

describe("Background", () => {
  beforeEach(() => {
    // jsdom has no canvas implementation; the grid bails out without a context.
    jest
      .spyOn(HTMLCanvasElement.prototype, "getContext")
      .mockReturnValue(null);
    localStorage.clear();
    window.history.replaceState(null, "", "/");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("defaults to the halo variant", () => {
    render(<Background />);

    expect(screen.getByRole("button", { name: "Halo" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });

  it("switches variant and records it in the URL", async () => {
    render(<Background />);

    await userEvent.click(screen.getByRole("button", { name: "Comet" }));

    expect(screen.getByRole("button", { name: "Comet" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(window.location.search).toBe("?bg=comet");
    expect(localStorage.getItem("dot-grid-variant")).toBe("comet");
  });

  it("reads the initial variant from the URL", () => {
    window.history.replaceState(null, "", "/?bg=sonar");

    render(<Background />);

    expect(screen.getByRole("button", { name: "Sonar" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });
});
