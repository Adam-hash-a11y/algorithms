import { uniqueSortedNumbers } from "./uniqueSortedNumbers";
describe("test uniqueSortedNumber function", () => {
  test("should return a sorted array with no duplicates", () => {
    //Given

    const array: number[] = [5, 5, 99, 7, 8, 1, 3, 3, 3, 1];

    //When

    const result = uniqueSortedNumbers(array);

    //Then

    expect(result).toEqual([1, 3, 5, 7, 8, 99]);
  });
});
