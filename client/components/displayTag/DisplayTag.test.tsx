import { render } from "@testing-library/react";

import DisplayTag from ".";

describe("Component - DisplayTag", () => {
  it("should renders the component", () => {
    const { container } = render(<DisplayTag>Horror</DisplayTag>);
    expect(container).toMatchSnapshot();
  });

  it("should render text", () => {
    const { getByText } = render(<DisplayTag>Documentary</DisplayTag>);
    expect(getByText("Documentary")).toBeTruthy;
  });
});
