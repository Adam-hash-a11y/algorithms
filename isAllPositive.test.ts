import { isAllPostiveNumbers } from "./isAllPositive";

describe("test function isAllPostiveNumbers", () => {
  test("should return true if all the elements in the array are positive", () => {
    //Given

    const array: number[] = [1, 2, 3, 4, 5];

    //When

    const result: boolean = isAllPostiveNumbers(array);

    //Then

    expect(result).toBeTruthy;
  });

  test("should return false if the array contains a negative number", () => {
    //Given

    const array: number[] = [1, -6, 2, 3, 4, 5];

    //When

    const result: boolean = isAllPostiveNumbers(array);

    //Then

    expect(result).toBeFalsy;
  });
});
