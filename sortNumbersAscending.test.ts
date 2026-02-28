import { sortNumberAscending } from "./sortNumbersAscending";

describe("test sortNumbersAscending fucntion", () => {
  test("should return an array sorted in ascending order", () => {
    //Given

    const array = [4, 1, 3, 99, 0, -1];

    //When

    const result = sortNumberAscending(array);

    //Then

    expect(result).toEqual([-1, 0, 1, 3, 4, 99]);
  });

  test("should return an empty array if the initial array is empty", () => {
    //Given

    const array: number[] = [];

    //When

    const result = sortNumberAscending(array);

    //Then

    expect(result).toEqual([]);
  });
});
