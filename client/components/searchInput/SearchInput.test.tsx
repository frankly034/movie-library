import { fireEvent, render } from "@testing-library/react";

import SearchInput from ".";
jest.useFakeTimers();
describe("Component - SearchInput", () => {
  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
  });

  it("renders component", () => {
    const { container } = render(<SearchInput onSearch={handleChange} />);
    expect(container).toMatchSnapshot();
  });

  it("should not fire the on change function immediately when value is changed", () => {
    const { getByRole } = render(
      <SearchInput name="search" onSearch={handleChange} />
    );

    fireEvent.change(getByRole("search-input"), { target: { value: "23" } });
    expect(handleChange).toHaveBeenCalledTimes(0);
  });

  it("should fire the on change function after 1000ms when value is changed", () => {
    const { getByRole } = render(
      <SearchInput name="search" onSearch={handleChange} />
    );

    fireEvent.change(getByRole("search-input"), { target: { value: "23" } });
    jest.advanceTimersByTime(1000);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
