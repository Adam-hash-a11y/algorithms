import { mostCommonChar } from "./mostCommonChar";

describe("test mostCommonChar function", () => {
  test("should return the most common letter in a given string", () => {
    //Given

    const str = "hello";

    //When

    const result = mostCommonChar(str);

    //Then

    expect(result).toEqual("l");
  });
});
