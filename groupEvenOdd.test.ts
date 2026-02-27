import { groupEvenOdd } from "./groupEvenOdd";

describe("test function groupEvenOdd", () => {
  test("should return an object with even and odd number arrays", () => {
    //Given

    const array: number[] = [1, 2, 3, 4, 5, 6];

    //When

    const result = groupEvenOdd(array);

    //Then

    expect(result).toEqual({ even: [2, 4, 6], odd: [1, 3, 5] });
  });
});
