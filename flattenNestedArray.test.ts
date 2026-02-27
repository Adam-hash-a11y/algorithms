import { flattenArray } from "./flattenNestedArray";

describe("test function flattenArray", () => {
  test("should a flat array", () => {
    //Given

    const array = [[1, 2], [3, 4], 2];

    //When

    const result = flattenArray(array);

    //Then

    expect(result).toEqual([1, 2, 3, 4, 2]);
  });
});
