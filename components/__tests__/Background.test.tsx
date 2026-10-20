import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Background, setSwitcherVisible } from "../Background";

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

  it("hides the switcher until it is revealed", () => {
    render(<Background />);
    expect(screen.queryByRole("group", { name: "Background variant" })).not.toBeInTheDocument();

    act(() => setSwitcherVisible(true));
    expect(screen.getByRole("group", { name: "Background variant" })).toBeInTheDocument();

    act(() => setSwitcherVisible(false));
    expect(screen.queryByRole("group", { name: "Background variant" })).not.toBeInTheDocument();
  });

  it("defaults to the comet variant", () => {
    setSwitcherVisible(true);
    render(<Background />);

    expect(screen.getByRole("button", { name: "Comet" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });

  it("switches variant and records it in the URL", async () => {
    setSwitcherVisible(true);
    render(<Background />);

    await userEvent.click(screen.getByRole("button", { name: "Lens" }));

    expect(screen.getByRole("button", { name: "Lens" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(window.location.search).toBe("?bg=lens");
    expect(localStorage.getItem("dot-grid-variant")).toBe("lens");
  });

  it("reads the initial variant from the URL", () => {
    setSwitcherVisible(true);
    window.history.replaceState(null, "", "/?bg=sonar");

    render(<Background />);

    expect(screen.getByRole("button", { name: "Sonar" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });
});
