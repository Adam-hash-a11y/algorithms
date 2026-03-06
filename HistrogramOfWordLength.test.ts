import { histogramWordsLength } from "./HistrogramOfWordLength";
describe("test histogramWordsLength function", () => {
  test("should return an object with the frequency of each number", () => {
    //Given

    const array = ["hi", "hello", "a"];

    //When

    const result = histogramWordsLength(array);

    //Then

    expect(result).toEqual({ "1": 1, "2": 1, "5": 1 });
  });
});
