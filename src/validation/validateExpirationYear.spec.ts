import { describe, it, expect } from "vitest";
import { validateExpirationYear } from "./validateExpirationYear";

describe("validateCVC Unit Test Suites", () => {
  it("should return something", () => {
    expect(validateExpirationYear("")).toBeDefined();
  });

  it("should return an error message and the false boolean if there is no args", () => {
    expect(validateExpirationYear("")).toStrictEqual([
      false,
      "Year can't be blank",
    ]);
  });

  it("should return an error message and the false boolean if the format of argument is not valid", () => {
    expect(validateExpirationYear("2o")).toStrictEqual([
      false,
      "Wrong format, year can be only numeric",
    ]);
  });

  it("should return an error message and the false boolean if there is not enough characters", () => {
    expect(validateExpirationYear("2")).toStrictEqual([
      false,
      "There aren't enough characters in year",
    ]);
  });

  it("should not return any error message", () => {
    expect(validateExpirationYear("12")).toStrictEqual([true, ""]);
  });
});
