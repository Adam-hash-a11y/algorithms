import { squareNumbers } from "./squareOfNumbers";

describe("test function square numbers", () => {
  test("should return an array with the square number of each number in the given array", () => {
    //Given

    const array: number[] = [2, 4, 6];

    //When

    const result: number[] = squareNumbers(array);

    //Then

    expect(result).toEqual([4, 16, 36]);
  });
});
