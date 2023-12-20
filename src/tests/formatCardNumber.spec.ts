import { describe, it, expect } from "vitest";
import { formatCardNumber } from "../utils/formatCardNumber";

describe("formatCardNumber Unit Test Suites", () => {
  it("should be reformat the string", () => {
    expect(formatCardNumber("1234567891234567")).toBe("1234 5678 9123 4567");
  });
});
