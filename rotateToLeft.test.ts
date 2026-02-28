import { rotateLeft } from "./rotateToLeft";

describe("test function rotateLeft", () => {
  test("should return an array rotated to left", () => {
    //Given

    const array: number[] = [1, 2, 3, 4];

    //When

    const result: number[] = rotateLeft(array);

    //Then

    expect(result).toEqual([2, 3, 4, 1]);
  });
});
