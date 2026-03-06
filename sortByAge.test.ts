import { sortByAge } from "./sortByAge";
describe("test sortByAge function", () => {
  test("should return a sorted array of ages in descending order", () => {
    //Given

    const array = [{ a: 20 }, { a: 50 }, { a: 70 }];

    //When

    const result = sortByAge(array);

    //Then

    expect(result).toEqual([70, 50, 20]);
  });
});
