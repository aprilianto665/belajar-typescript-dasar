"use strict";
describe("Array", function () {
    it("should same with javascript", function () {
        const names = ["amba", "rusdi"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("should support readonly array", function () {
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        // readonly tidak bisa dirubah nilainya
        // hobbies[0] = "Main Game";
    });
    //  tipe data tupple (array yang jumlah dan tipe datanya sudah ditentukan)
    it("should support tupple", function () {
        const person = ["Mas", "Rusdi", 30];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
