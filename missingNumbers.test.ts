import { missingNumbers } from "./missingNumbers";
describe("test missingNumbers function", () => {
  test("should return an array containing missing number from the intial array", () => {
    //Given

    const array = [1, 3, 5, 9];

    //When

    const result = missingNumbers(array);

    //Then

    expect(result).toEqual(expect.arrayContaining([2, 4, 6, 7, 8]));
  });
});
