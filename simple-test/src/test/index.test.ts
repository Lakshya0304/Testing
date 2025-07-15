
import { describe, expect, it, test } from "@jest/globals";
import { multiple, sum } from "../index";

describe("", () => {
    it("adds 1 + 2 to equal 3", () => {
        const final = sum(1,2);
        expect(final).toBe(3);
        // expect(sum(1, 2)).toBe(3);
    });
});

describe("multiple testing", () => {
    it("multiple 1 * 2 to equal 2", () => {
        const final = multiple(1,2);
        expect(final).toBe(2);
        // expect(sum(1, 2)).toBe(3);
    });
});
