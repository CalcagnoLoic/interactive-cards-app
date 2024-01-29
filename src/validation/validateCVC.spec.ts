import { describe, it, expect } from "vitest";
import { validateCVC } from "./validateCVC";

describe("validateCVC Unit Test Suites", () => {
  it("should return something", () => {
    expect(validateCVC("")).toBeDefined();
  });

  it("should return an error message and the false boolean if there is no args", () => {
    expect(validateCVC("")).toStrictEqual([false, "Can't be blank"]);
  });

  it("should return an error message and the false boolean if the format of argument is not valid", () => {
    expect(validateCVC("ajo")).toStrictEqual([
      false,
      "Wrong format, can be only numeric",
    ]);
  });

  it("should return an error message and the false boolean if there is not enough characters", () => {
    expect(validateCVC("2")).toStrictEqual([
      false,
      "There aren't enough characters",
    ]);
  });

  it("should not return any error message", () => {
    expect(validateCVC("123")).toStrictEqual([true, ""]);
  });
});
