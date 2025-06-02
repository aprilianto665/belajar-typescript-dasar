import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("should return hello rusdi", function (): void {
    expect(sayHello("rusdi")).toBe("Hello rusdi");
  });
});
