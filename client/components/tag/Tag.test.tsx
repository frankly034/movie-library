import { fireEvent, render } from "@testing-library/react";

import Tag from ".";
describe("Component - Title", () => {
  let handleClick: () => void;

  beforeEach(() => {
    handleClick = jest.fn();
  });

  it("should render component", () => {
    const { container } = render(<Tag onClick={handleClick}>Action</Tag>);
    expect(container).toMatchSnapshot();
  });

  it("should render button component", () => {
    const { getByRole } = render(<Tag onClick={handleClick}>Adventure</Tag>);
    expect(getByRole("button")).toBeTruthy;
  });

  it("should fire the onClick function when clicked", () => {
    const { getByRole } = render(
      <Tag onClick={handleClick}>{"Click Me!"}</Tag>
    );

    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
