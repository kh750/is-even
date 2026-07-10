import { expect, test } from "vitest"
import { isEven } from "./index"

test.each([2, 6, 8])("should return true for %i", (n) => {
    expect(isEven(n)).toBe(true);
})