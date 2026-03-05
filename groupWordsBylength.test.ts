import { groupWordsBylength } from "./groupWordsBylength";

describe("test groupWordsBylength function", () => {
  test("should return a object grouping words by their respective length", () => {
    //Given

    const array = ["hi", "hello", "nice", "a"];

    //When

    const result = groupWordsBylength(array);

    //Then

    expect(result).toEqual({
      "1": ["a"],
      "2": ["hi"],
      "4": ["nice"],
      "5": ["hello"],
    });
  });
});
