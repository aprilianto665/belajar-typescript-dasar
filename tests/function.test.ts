describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Rusdi")).toBe("Hello Rusdi");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Amba");
  });

  it("should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Rusdi")).toBe("Hello Rusdi");
    expect(sayHello()).toBe("Hello Guest");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("Rusdi")).toBe("Hello Rusdi");
    expect(sayHello("Mas", "Rusdi")).toBe("Hello Mas Rusdi");
  });
});
