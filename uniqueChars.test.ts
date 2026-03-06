import { uniqueChars } from "./uniqueChars";

describe("test uniqueChars function", () => {
  test("should return unique chars from the intial array of words", () => {
    //Given

    const array = ["ab", "bc", "abc"];

    //When

    const result = uniqueChars(array);

    //Then

    expect(result).toEqual(expect.arrayContaining(["b", "a", "c"]));
  });
});
