import { smallestNumber } from "./smallestNumber";

describe("test smallestNumber function", () => {
  test("should retrun the smallest number in the given array", () => {
    //Given

    const array = [5, 10, 3];

    //When

    const result = smallestNumber(array);

    //Then

    expect(result).toEqual(3);
  });
});
