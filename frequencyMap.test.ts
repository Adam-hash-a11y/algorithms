import { frequencyMap } from "./frequencyMap";
describe("test frequency Map function", () => {
  test("should return an object that have the frequencey of each number in the given array", () => {
    //Given

    const array: number[] = [1, 2, 2, 2, 3, 3, 5];

    //When

    const result: {} = frequencyMap(array);

    //Then

    expect(result).toEqual({ "1": 1, "2": 3, "3": 2, "5": 1 });
  });
  test("should return an empty object when array is empty", () => {
    //Given

    const array: number[] = [];

    //When

    const result = frequencyMap(array);

    //Then

    expect(result).toEqual({});
  });
  test("should return correct frequency when all elements are the same", () => {
    //Given

    const array: number[] = [2, 2, 2];

    //When

    const result = frequencyMap(array);

    //Then

    expect(result).toEqual({ 2: 3 });
  });
});
