import { getUrl } from "..";

describe("Utils - getUrl", () => {
  it("should return url with query string params attached", () => {
    const newUrl = getUrl({
      baseUrl: "https://someurl",
      queryParams: { search: "home" },
      url: "resource",
    });

    expect(newUrl).toEqual("https://someurl/resource?search=home");
  });

  it("should return url with query string array params attached", () => {
    const newUrl = getUrl({
      baseUrl: "https://someurl",
      queryParams: { search: "home" },
      arrayParams: { genres: ["abc", "xyz"] },
      url: "resource",
    });

    expect(newUrl).toEqual(
      "https://someurl/resource?search=home&genres=abc&genres=xyz"
    );
  });

  it("should return url without query string", () => {
    const newUrl = getUrl({
      baseUrl: "https://someurl",
      url: "resource",
    });

    expect(newUrl).toEqual("https://someurl/resource");
  });

  it("should not append empty query valued params", () => {
    const newUrl = getUrl({
      baseUrl: "https://someurl",
      url: "resource",
      queryParams: { search: "" },
      arrayParams: { genres: [""] },
    });

    expect(newUrl).toEqual("https://someurl/resource");
  });
});
