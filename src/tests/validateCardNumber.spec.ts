import { describe, it, expect } from "vitest";
import { validateCardNumber } from "../validation/validateCardNumber";

describe("validateCardNumber Unit Test Suites", () => {
    it("should return something", () => {
        expect(validateCardNumber("")).toBeDefined();
      });
    
      it("should return an error message and the false boolean if there is no args", () => {
        expect(validateCardNumber("")).toStrictEqual([false, "Can't be blank"]);
      });
    
      it("should return an error message and the false boolean if the format of argument is not valid", () => {
        expect(validateCardNumber("152e 1586 2562 5886")).toStrictEqual([
          false,
          "Wrong format, can be only numeric",
        ]);
      });
    
      it("should return an error message and the false boolean if there is not enough characters", () => {
        expect(validateCardNumber("2558 5458")).toStrictEqual([
          false,
          "There aren't enough characters",
        ]);
      });
    
      it("should not return any error message", () => {
        expect(validateCardNumber("1234 5678 9123 4567")).toStrictEqual([true, ""]);
      });
})
