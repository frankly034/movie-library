import { fireEvent, render } from "../../utils/test-utils";

import SearchButton from ".";

describe("Component - SearchButton", () => {
  let handleClick: jest.Mock;

  beforeEach(() => {
    handleClick = jest.fn();
  });

  it("should render component", () => {
    const { container } = render(<SearchButton onClick={handleClick} />);
    expect(container).toMatchSnapshot();
  });

  it("should render button component", () => {
    const { getByRole } = render(<SearchButton onClick={handleClick} />);
    expect(getByRole("button")).toBeTruthy;
  });

  it("should fire the onClick function when clicked", () => {
    const { getByRole } = render(<SearchButton onClick={handleClick} />);

    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
