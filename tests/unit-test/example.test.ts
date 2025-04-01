import { isEven } from "@/app/homepage/page";
import { describe, it } from "node:test";
import assert from "assert";

describe("isEven", () => {
    it("should return true for even numbers", () => {
        assert.strictEqual(isEven(2), true); 
        assert.strictEqual(isEven(0), true); 
        assert.strictEqual(isEven(4), true); 
    });

    it("should return false for odd numbers", () => {
        assert.strictEqual(isEven(1), false); 
        assert.strictEqual(isEven(-3), false); 
        assert.strictEqual(isEven(7), false); 
    });
    
});