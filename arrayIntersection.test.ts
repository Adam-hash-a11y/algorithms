import { arraysIntersection } from "./arrayIntersection";

describe("test arraysIntersection function", () => {
  test("should return an array containing only the common elements of two arrays", () => {
    //Given
    const array1: number[] = [1, 2, 3];
    const array2: number[] = [3, 4, 5, 1];

    //When

    const result: number[] = arraysIntersection(array1, array2);

    //Then

    expect(result).toEqual(expect.arrayContaining([3, 1]));
  });

  test("should return an empty array is there are no common elments between two arrays", () => {
    //Given
    const array1: number[] = [1, 2, 3];
    const array2: number[] = [17, 4, 5, 9];

    //When

    const result: number[] = arraysIntersection(array1, array2);

    //Then

    expect(result).toEqual([]);
  });
});
