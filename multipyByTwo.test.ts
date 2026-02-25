import { multiplyByTwo } from "./multipyByTwo";

describe("test function multiply by two", () => {
  test("should return an array of multiuple two", () => {
    //Given

    const arr = [1, 2, 3];

    // When

    const result = multiplyByTwo(arr);

    //Then

    expect(result).toStrictEqual([2, 4, 6]);
  });
});
