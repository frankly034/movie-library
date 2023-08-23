import { render } from "@testing-library/react";

import Title from "./Title";

describe("Component - Title", () => {
  it("renders title component", () => {
    const { container } = render(<Title>{"Gift a friend this holiday"}</Title>);
    expect(container).toMatchSnapshot();
  });

  it("should render a heading component", () => {
    const { getByRole } = render(<Title>{"Gift a friend this holiday"}</Title>);
    expect(getByRole("heading")).toBeTruthy;
  });
});
