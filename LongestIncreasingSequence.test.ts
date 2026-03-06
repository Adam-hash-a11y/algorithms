import { longSequence } from "./LongestIncreasingSequence";

describe("test longestSequence function", () => {
  test("should return the longest sequence in the given array", () => {
    //Given

    const array = [1, 2, 3, 1, 2, 3, 6, 7];

    //When

    const result = longSequence(array);

    //Then

    expect(result).toEqual(5);
  });
});
