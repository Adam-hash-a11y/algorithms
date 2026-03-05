import { longestSentence } from "./longestSentence";

describe("test longest sentence function", () => {
  test("should return the longest string in the array", () => {
    //Given

    const array = ["hi", "hello adam"];

    //When

    const result: string = longestSentence(array);

    //Then

    expect(result).toEqual("hello adam");
  });
});
