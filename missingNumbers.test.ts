import { missingNumber } from "./missingNumbers";
describe("test missingNumber function", () => {
  test("should return an array that have missing numbers from the initial array", () => {
    //Given

    const array = [1, 2, 6, 9];

    //When

    const result = missingNumber(array);

    //Then

    expect(result).toEqual([3, 4, 5, 7, 8]);
  });
});
