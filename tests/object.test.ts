describe("Object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Rusdi",
    };
    console.info(person);

    person.id = "2";
    person.name = "Mas Rusdi";

    console.info(person);
  });
});
