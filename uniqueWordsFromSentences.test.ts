import { uniqueWords } from "./uniqueWordsFromSentences";
describe("test uniqueWords function", () => {
  test("should return an array containing unique words from the initial array", () => {
    //Given

    const array = ["hello js", "hello world", "hello test", "test"];

    //When

    const result = uniqueWords(array);

    //Then

    expect(result).toEqual(
      expect.arrayContaining(["js", "hello", "world", "test"]),
    );
  });
});
