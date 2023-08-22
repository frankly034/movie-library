import { render } from "@testing-library/react";

import Title from "./Title";

describe("Component - Title", () => {
  it("renders title component", () => {
    const { container } = render(<Title>{"Gift a friend this holiday"}</Title>);
    expect(container).toMatchSnapshot();
  });
});
