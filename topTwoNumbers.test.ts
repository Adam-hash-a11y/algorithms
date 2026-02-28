import { topTwo } from "./topTwoNumbers";
describe("test sortNumberAscending ", () => {
  test("should return an array that contains the top 2 numbers", () => {
    //Given

    const array = [10, 20, 30, 40];

    //When

    const result: number[] = topTwo(array);

    //Then

    expect(result).toEqual(expect.arrayContaining([40, 30]));
  });
  test("should return an empty array if the given array is empty", () => {
    //Given

    const array: number[] = [];

    //When

    const result: number[] = topTwo(array);

    //Then

    expect(result).toEqual([]);
  });
});
