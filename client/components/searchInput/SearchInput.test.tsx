import { fireEvent, render } from "../../utils/test-utils";

import SearchInput from ".";

describe("Component - SearchInput", () => {
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
  });

  it("renders component", () => {
    const { container } = render(
      <SearchInput onChange={handleChange} value="" />
    );
    expect(container).toMatchSnapshot();
  });

  it("should fire the on change function when value is changed", () => {
    const { getByRole } = render(
      <SearchInput name="search" onChange={handleChange} value="" />
    );

    fireEvent.change(getByRole("search-input"), { target: { value: "23" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
