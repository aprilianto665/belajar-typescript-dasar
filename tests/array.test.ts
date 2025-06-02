describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["amba", "rusdi"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
    console.info(hobbies);

    // readonly tidak bisa dirubah nilainya
    // hobbies[0] = "Main Game";
  });

  //  tipe data tupple (array yang jumlah dan tipe datanya sudah ditentukan)
  it("should support tupple", function () {
    const person: readonly [string, string, number] = ["Mas", "Rusdi", 30];

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
