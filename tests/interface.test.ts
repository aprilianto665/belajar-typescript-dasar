import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Rusdi Barber",
      nib: "123123123",
      npwp: "2131312313",
    };

    console.info(seller);
  });

  it("should support function interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Rusdi", "Amba", "Fuad"];
    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Rusdi",
      address: "Ngawi",
    };

    expect(dictionary["name"]).toBe("Rusdi");
    expect(dictionary["address"]).toBe("Ngawi");
  });

  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Amba",
      division: "IT",
    };

    const manager: Manager = {
      id: "2",
      name: "Rusdi",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(employee);
    console.info(manager);
  });

  it("should support function in interface", function () {
    const person: Person = {
      name: "Rusdi",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Fuad"));
  });

  it("should support intersection types", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: number;
    }

    type Domain = HasName & HasId;

    const domain: Domain = {
      id: 1,
      name: "Rusdi",
    };

    console.info(domain);
  });

  it("should support type assertsions", function () {
    const person: any = {
      name: "Rusdi",
      age: 30,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
