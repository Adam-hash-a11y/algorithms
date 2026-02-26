import { largestNumber } from "./largestNumber";

describe("test function largestNumber", () => {
  test("should return the sum of numbers of the array", () => {
    //Given

    const array = [3, 7, 10];

    //When

    const result = largestNumber(array);

    //Then

    expect(result).toEqual(10);
  });
});
