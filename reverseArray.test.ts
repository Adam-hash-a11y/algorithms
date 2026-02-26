import { reverseArrayBackward } from "./reverseArray";

describe("test function reverseArrayBackwards", () => {
  test("should the reverse array of the initial given array", () => {
    //Given

    const array: number[] = [1, 2, 3, 4];

    //When

    const result: number[] = reverseArrayBackward(array);

    //Then

    expect(result).toEqual([4, 3, 2, 1]);
  });
});
