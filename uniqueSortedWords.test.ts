import { uniqueSortedWords } from "./uniqueSortedWords";
describe(" test uniqueSortedWords function ", () => {
  test("should return a sorted array of unique chars", () => {
    //Given

    const array = ["b", "a", "b", "c"];

    //When

    const result = uniqueSortedWords(array);

    //Then

    expect(result).toEqual(["a", "b", "c"]);
  });
});
