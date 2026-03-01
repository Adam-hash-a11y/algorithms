import { wordGroups } from "./groupWordsByFirstLetter";
describe("test word groups function", () => {
  test("should return an object contaaining words grouped by the first letter", () => {
    //Given

    const array = ["apple", "car", "apricot", "banana", "balha"];

    //When

    const result = wordGroups(array);

    //

    expect(result).toEqual({
      a: ["apple", "apricot"],
      c: ["car"],
      b: ["banana", "balha"],
    });
  });
});
