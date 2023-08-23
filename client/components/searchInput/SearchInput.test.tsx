import { fireEvent, render } from "@testing-library/react";

import SearchInput from ".";

describe("Component - SearchInput", () => {
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
  });

  it("renders component", () => {
    const { container } = render(<SearchInput onChange={handleChange} />);
    expect(container).toMatchSnapshot();
  });

  it("should fire the on change function when value is changed", () => {
    const { getByRole } = render(
      <SearchInput name="search" onChange={handleChange} />
    );

    fireEvent.change(getByRole("search-input"), { target: { value: "23" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
