import { Footer } from "@/components/Footer";
import { fireEvent, render } from "@testing-library/react";

describe("<Footer /> ", () => {
  test("should fire onGetJoke callback on click of Get Joke button", () => {
    let onGetJokeMock = jest.fn();
    const { getByText } = render(<Footer onGetJoke={onGetJokeMock} />);
    const button = getByText("Get Joke");
    fireEvent.click(button);
    expect(onGetJokeMock).toBeCalledTimes(1);
  });
});
