import { arraysDiffrence } from "./arrayDiffrence";

describe("test arraysDiffrence fucntion", () => {
  test("should return an array containing the non common elements of 2 arrays", () => {
    //Given

    const array1 = [1, 2, 3];
    const array2 = [3, 3];

    //When

    const result: number[] = arraysDiffrence(array1, array2);

    //Then

    expect(result).toEqual(expect.arrayContaining([2, 1]));
  });
  test("should return an empty array if the two array have the same elments", () => {
    //Given

    const array1 = [1, 2, 3];
    const array2 = [3, 2, 1];

    //When

    const result: number[] = arraysDiffrence(array1, array2);

    //Then

    expect(result).toEqual([]);
  });
});
