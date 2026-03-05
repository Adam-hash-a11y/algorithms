import { groupByDigitCount } from "./groupByDigitCount";

describe("test function groupBydigitcount", () => {
  test("should return and onject of numbers sorted by their length", () => {
    //Given

    const array = [1, 10, 100, 22];

    //When

    const result = groupByDigitCount(array);

    //Then

    expect(result).toEqual({ "1": [1], "2": [10, 22], "3": [100] });
  });
});
