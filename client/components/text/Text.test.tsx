import { render } from "@testing-library/react";

import Text from ".";

describe("Component - Title", () => {
  it("should renders text component", () => {
    const { container } = render(<Text>{"Gift a friend this holiday"}</Text>);
    expect(container).toMatchSnapshot();
  });

  it("should render text", () => {
    const { getByText } = render(<Text>{"Hello world"}</Text>);
    expect(getByText("Hello world")).toBeTruthy;
  });
});
