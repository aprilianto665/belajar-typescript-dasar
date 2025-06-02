import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it("should return hello rusdi", function () {
        expect(sayHello("rusdi")).toBe("Hello rusdi");
    });
});
