import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { profile } from "@/lib/content";
import { Terminal } from "../Terminal";

const push = jest.fn();
const prefetch = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push, prefetch }),
}));

const boot = () => {
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(<Terminal />);
  act(() => {
    jest.advanceTimersByTime(2000);
  });
  return user;
};

const runCommand = async (user: ReturnType<typeof userEvent.setup>, command: string) => {
  await user.type(screen.getByRole("textbox", { name: "Command" }), `${command}{Enter}`);
};

describe("Terminal", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    push.mockClear();
    // jsdom doesn't implement scrolling.
    Element.prototype.scrollIntoView = jest.fn();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the intro headline before the boot sequence runs", () => {
    render(<Terminal />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: profile.headline,
      })
    ).toBeInTheDocument();
  });

  it("prints a section when its command is run", async () => {
    const user = boot();

    await runCommand(user, "experience");

    expect(screen.getByText("Kanexa")).toBeInTheDocument();
    expect(screen.getByText("Xero")).toBeInTheDocument();
  });

  it("suggests the closest command for a typo", async () => {
    const user = boot();

    await runCommand(user, "wrok");

    expect(screen.getByText(/command not found/)).toHaveTextContent("Did you mean work?");
  });

  it("only lists the hidden modes with ls -a", async () => {
    const user = boot();

    await runCommand(user, "ls");
    expect(screen.queryByText(".story/")).not.toBeInTheDocument();

    await runCommand(user, "ls -a");
    expect(screen.getByText(".story/")).toBeInTheDocument();
    expect(screen.getByText(".canvas/")).toBeInTheDocument();
  });

  it("toggles the hover effect switcher with theme", async () => {
    localStorage.clear();
    const user = boot();

    await runCommand(user, "ls -a");
    expect(screen.getByText(".theme")).toBeInTheDocument();

    await runCommand(user, "theme");
    expect(localStorage.getItem("dot-grid-switcher")).toBe("1");
    expect(screen.getByText(/switcher shown/)).toBeInTheDocument();

    await runCommand(user, "theme");
    expect(localStorage.getItem("dot-grid-switcher")).toBeNull();
  });

  it("sets a hover effect with theme <name>", async () => {
    localStorage.clear();
    const user = boot();

    await runCommand(user, "theme sonar");
    expect(localStorage.getItem("dot-grid-variant")).toBe("sonar");
    expect(screen.getByRole("button", { name: "● sonar" })).toHaveAttribute("aria-pressed", "true");

    await runCommand(user, "theme disco");
    expect(screen.getByText(/unknown effect/)).toHaveTextContent("halo, lens, comet, sonar");
  });

  it.each([
    ["cd .story", "/lab/story"],
    ["man ash", "/lab/story"],
    ["cd .canvas", "/lab/canvas"],
    ["startx", "/lab/canvas"],
  ])("%s switches to %s", async (command, href) => {
    const user = boot();

    await runCommand(user, command);
    expect(push).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(push).toHaveBeenCalledWith(href);
  });
});
