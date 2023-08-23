import { fireEvent, render } from "@testing-library/react";

import ClickableTagWithCloseIcon from ".";

describe("Component - ClickableTagWithCloseIcon", () => {
  let handleClick: jest.Mock;

  beforeEach(() => {
    handleClick = jest.fn();
  });

  it("should render component", () => {
    const { container } = render(
      <ClickableTagWithCloseIcon onClick={handleClick}>
        Action
      </ClickableTagWithCloseIcon>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render button component", () => {
    const { getByRole } = render(
      <ClickableTagWithCloseIcon onClick={handleClick}>
        Adventure
      </ClickableTagWithCloseIcon>
    );
    expect(getByRole("button")).toBeTruthy;
  });

  it("should fire the onClick function when clicked", () => {
    const { getByRole } = render(
      <ClickableTagWithCloseIcon onClick={handleClick}>
        {"Click Me!"}
      </ClickableTagWithCloseIcon>
    );

    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
