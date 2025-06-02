describe("Interface", function () {
    it("should support in typescript", function () {
        const seller = {
            id: 1,
            name: "Rusdi Barber",
            nib: "123123123",
            npwp: "2131312313",
        };
        console.info(seller);
    });
    it("should support function interface", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it("should support indexable interface", function () {
        const names = ["Rusdi", "Amba", "Fuad"];
        console.info(names);
    });
    it("should support indexable interface for non number index", function () {
        const dictionary = {
            name: "Rusdi",
            address: "Ngawi",
        };
        expect(dictionary["name"]).toBe("Rusdi");
        expect(dictionary["address"]).toBe("Ngawi");
    });
    it("should support extends interface", function () {
        const employee = {
            id: "1",
            name: "Amba",
            division: "IT",
        };
        const manager = {
            id: "2",
            name: "Rusdi",
            division: "IT",
            numberOfEmployees: 10,
        };
        console.info(employee);
        console.info(manager);
    });
    it("should support function in interface", function () {
        const person = {
            name: "Rusdi",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Fuad"));
    });
    it("should support intersection types", function () {
        const domain = {
            id: 1,
            name: "Rusdi",
        };
        console.info(domain);
    });
    it("should support type assertsions", function () {
        const person = {
            name: "Rusdi",
            age: 30,
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
