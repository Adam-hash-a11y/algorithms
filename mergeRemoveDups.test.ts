import { mergeArrays, removeDups, mergeAndDedupe } from "./mergeRemoveDups";

describe("test function merge arrays", () => {
  test("should return a single merged array from the two arrays", () => {
    //Given

    const array1: number[] = [1, 2, 3];
    const array2: number[] = [2, 3, 4, 5];

    //When

    const result: number[] = mergeArrays(array1, array2);

    //Then

    expect(result).toEqual([1, 2, 3, 2, 3, 4, 5]);
  });
});
describe("test function removeDups", () => {
  test("should return an array with duplicate values removed", () => {
    //Given

    const array: number[] = [1, 2, 3, 2, 3, 4, 5];

    //When

    const result: number[] = removeDups(array);

    //Then

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("test function mergeAndDedupe", () => {
  test("should return a merged array without duplicates", () => {
    //Given

    const array1: number[] = [1, 2, 3];
    const array2: number[] = [2, 3, 4, 5];

    //When

    const result: number[] = mergeAndDedupe(array1, array2);

    //Then

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
