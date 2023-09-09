import { fireEvent, render } from "../../utils/test-utils";

import ClickableTag from ".";

describe("Component - ClickableTag", () => {
  let handleClick: jest.Mock;

  beforeEach(() => {
    handleClick = jest.fn();
  });

  it("should render component", () => {
    const { container } = render(
      <ClickableTag onClick={handleClick}>Action</ClickableTag>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render button component", () => {
    const { getByRole } = render(
      <ClickableTag onClick={handleClick}>Adventure</ClickableTag>
    );
    expect(getByRole("button")).toBeTruthy;
  });

  it("should fire the onClick function when clicked", () => {
    const { getByRole } = render(
      <ClickableTag onClick={handleClick}>{"Click Me!"}</ClickableTag>
    );

    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
