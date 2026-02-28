import { findDuplicates } from "./findDuplicates";
describe("test find duplicates function", () => {
  test("function should return array of the duplicate numbers in the initial array", () => {
    //Given

    const array = [1, 2, 2, 3, 3, 3];

    //When

    const result = findDuplicates(array);

    //Then
    expect(result).toEqual(expect.arrayContaining([3, 2]));
  });
  test("function should return an empty array i fthe initial array is empty", () => {
    //Given

    const array: number[] = [];

    //When

    const result = findDuplicates(array);

    //Then
    expect(result).toEqual([]);
  });
});
