import { countVowelsPerWord } from "./countVowels";

describe("test countVowelsPerWord function", () => {
  test("function should return an array of numbers corresponding to the number of vowels in each word", () => {
    //Given

    const array = ["hi", "cato"];

    //When

    const result = countVowelsPerWord(array);

    //Then

    expect(result).toEqual([1, 2]);
  });
});
