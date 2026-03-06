import { ValidateIncreasingArray } from "./validateIncreasingArray";

describe("test ValidateIncreasingArray function ", () => {
  test("should return true if the array is stricly increasing", () => {
    //Given

    const array = [1, 2, 3, 4, 5, 9];

    //When

    const result = ValidateIncreasingArray(array);

    //Then

    expect(result).toBeTruthy();
  });
  test("should return true if the array is not stricly increasing", () => {
    //Given

    const array = [1, 2, 3, 2, 5, 9];

    //When

    const result = ValidateIncreasingArray(array);

    //Then

    expect(result).toBeFalsy();
  });
});
