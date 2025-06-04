"use strict";
describe("Function", function () {
    it("should support in typescript", function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Rusdi")).toBe("Hello Rusdi");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Amba");
    });
    it("should support default value", function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello("Rusdi")).toBe("Hello Rusdi");
        expect(sayHello()).toBe("Hello Guest");
    });
    it("should support rest parameter", function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("should support optional parameter", function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Rusdi")).toBe("Hello Rusdi");
        expect(sayHello("Mas", "Rusdi")).toBe("Hello Mas Rusdi");
    });
    it("shoult support function overloading", function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe("Rusdi")).toBe("RUSDI");
        expect(callMe(10)).toBe(100);
    });
});
