import { sortStringsByLength } from "./sortByStringLengthdesc";
describe("test  sortStringsByLength function", () => {
  test("should return a sorted array of string by length in descending order", () => {
    //Given

    const array = ["a", "hello", "hi"];

    //When

    const result = sortStringsByLength(array);

    //Then

    expect(result).toEqual(["hello", "hi", "a"]);
  });
});
