import { describe, it, expect } from "vitest";
import { validateHolderName } from "../validation/validateHolderName";

describe("validateHolderName Unit Test Suites", () => {
    it("should return something", () => {
        expect(validateHolderName("johnDoe")).toBeDefined()
    })

    it("should be return false if there is empty", () => {
        expect(validateHolderName("")[0]).toBe(false)
    })
    it("should be return false if there is not empty", () => {
        expect(validateHolderName("12")[0]).toBe(true)
    })

    it("should display an error message if there is no argument", () => {
        expect(validateHolderName("")[1]).toBe("Can't be blank")
    })
})
