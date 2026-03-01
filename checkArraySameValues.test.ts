import { checkArraySameValues } from "./checkArraySameValues";

describe("test checkArraySameValues function", () => {
  test("should return true if both arrays have the same value and the same length", () => {
    //Given

    const array1 = [4, 1, 2, 3];
    const array2 = [3, 2, 1, 4];

    //When

    const result = checkArraySameValues(array1, array2);

    //Then

    expect(result).toBeTruthy();
  });
  test("should return false if both arrays either have diffrent lengths", () => {
    //Given

    const array1 = [4, 4, 1, 2, 3];
    const array2 = [3, 2, 1, 4];

    //When

    const result = checkArraySameValues(array1, array2);

    //Then

    expect(result).toBeFalsy();
  });
  test("should return false if both arrays either have diffrent values", () => {
    //Given

    const array1 = [5, 1, 2, 3];
    const array2 = [3, 2, 1, 4];

    //When

    const result = checkArraySameValues(array1, array2);

    //Then

    expect(result).toBeFalsy();
  });
});
