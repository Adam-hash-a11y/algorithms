import { threeElements } from "./threeElements";

describe("test function threeElements", () => {
  test("should return the first 3 elements of the array", () => {
    // Given

    const array: number[] = [1, 2, 3, 5, 6];

    // When

    const result: number[] = threeElements(array);
    // Then

    expect(result).toEqual([1, 2, 3]);
  });

  test("should return the array if it has less than 3 elements", () => {
    // Given

    const array: number[] = [1, 2];

    // When

    const result: number[] = threeElements(array);
    // Then

    expect(result).toEqual(array);
  });

  test("should return empty array if input is empty", () => {
    // Given

    const array: number[] = [];

    // When

    const result: number[] = threeElements(array);
    // Then

    expect(result).toEqual(array);
  });
});
