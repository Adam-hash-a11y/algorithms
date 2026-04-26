import { groupByRemainderOfThree } from "./GroupByRemainderOfThree";

describe("test groupByRemainderOfThree function ", () => {
  test("should an array of groups by the remainder of three", () => {
    //Given

    const array = [1, 2, 3, 4];

    //When

    const result = groupByRemainderOfThree(array);

    //Then

    expect(result).toEqual({ "0": [3], "1": [1, 4], "2": [2] });
  });
});
