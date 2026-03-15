import { groupWords } from "./groupWordsAlpha";

describe("test function groupWords", () => {
  test("function should return an array of words sorted alpahabetically", () => {
    //Given

    const array = ["banana", "apple"];

    //When

    const result = groupWords(array);

    //Then

    expect(result).toEqual(["apple", "banana"]);
  });
});
