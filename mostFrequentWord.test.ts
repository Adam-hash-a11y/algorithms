import { mostFrequentWord } from "./mostFrequentWord";

describe("test mostFrequentWord functiob", () => {
  test("should return the most frequent word in the array", () => {
    //Given

    const array = ["hi", "hi", "hello"];

    //When

    const result = mostFrequentWord(array);

    //Then

    expect(result).toEqual("hi");
  });
});
