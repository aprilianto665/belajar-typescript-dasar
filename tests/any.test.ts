describe("Any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Mas Rusdi",
      age: 30,
    };

    person.age = 31;
    person.adress = "Indonesia";

    console.info(person);
  });
});
