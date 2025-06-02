"use strict";
describe("Union type", function () {
    it("should support in typescript", function () {
        let sample = "Rusdi";
        sample = 69;
        sample = true;
        console.info(sample);
    });
    it("should support typeof operator", function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("rusdi")).toBe("RUSDI");
        expect(process(2)).toBe(4);
        expect(process(true)).toBe(false);
    });
});
