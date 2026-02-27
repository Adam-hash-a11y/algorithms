import { longestWordInArray } from "./longestWord";

describe("test function longestWordInArray", () => {
  test("should return the longest word in the given array", () => {
    //Given

    const array: string[] = ["car", "motorcycle", "bike"];

    //When

    const result: string = longestWordInArray(array);

    //Then

    expect(result).toEqual("motorcycle");
  });
});
