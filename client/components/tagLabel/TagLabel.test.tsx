import { render } from "@testing-library/react";

import TagLabel from ".";

describe("Component - TagLabel", () => {
  it("should renders the component", () => {
    const { container } = render(<TagLabel>Horror</TagLabel>);
    expect(container).toMatchSnapshot();
  });

  it("should render text", () => {
    const { getByText } = render(<TagLabel>Documentary</TagLabel>);
    expect(getByText("Documentary")).toBeTruthy;
  });
});
