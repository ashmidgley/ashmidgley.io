import { GetJokeButton } from "@/components/GetJokeButton";
import { fireEvent, render } from "@testing-library/react";

describe("<GetJokeButton /> ", () => {
  test("should fire onGetJoke callback on click of button", () => {
    let onGetJokeMock = jest.fn();
    const { getByText } = render(<GetJokeButton onGetJoke={onGetJokeMock} />);
    const button = getByText("Get Joke");
    fireEvent.click(button);
    expect(onGetJokeMock).toBeCalledTimes(1);
  });
});
