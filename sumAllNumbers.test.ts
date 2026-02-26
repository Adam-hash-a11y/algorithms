import { sumNumbers } from "./sumAllNumbers";

describe("test function sumNumbers", () => {
  test("should return the sum of numbers of the array", () => {
    //Given

    const array: number[] = [1, 2, 3, 4];

    //When

    const result = sumNumbers(array);

    //Then

    expect(result).toEqual(10);
  });
});
