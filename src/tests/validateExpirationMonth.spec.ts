import { describe, it, expect } from "vitest";
import { validateExpirationMonth } from "../validation/validateExpirationMonth";

describe("validateCVC Unit Test Suites", () => {
  it("should return something", () => {
    expect(validateExpirationMonth("")).toBeDefined();
  });

  it("should return an error message and the false boolean if there is no args", () => {
    expect(validateExpirationMonth("")).toStrictEqual([
      false,
      "Month can't be blank",
    ]);
  });

  it("should return an error message and the false boolean if the format of argument is not valid", () => {
    expect(validateExpirationMonth("2o")).toStrictEqual([
      false,
      "Wrong format, month can be only numeric",
    ]);
  });

  it("should return an error message and the false boolean if there is not enough characters", () => {
    expect(validateExpirationMonth("2")).toStrictEqual([
      false,
      "There aren't enough characters in month",
    ]);
  });

  it("should return an error message and the false boolean if there month is not valid", () => {
    expect(validateExpirationMonth("23")).toStrictEqual([
      false,
      "Month must be between 1 and 12",
    ]);
  });

  it("should not return any error message", () => {
    expect(validateExpirationMonth("12")).toStrictEqual([true, ""]);
  });
});
