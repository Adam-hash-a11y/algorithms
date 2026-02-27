import { mostFrequent } from "./mostFrequentNumber";

describe("test function mostFrequant", () => {
  test("should retunrn the most repeated number in the array", () => {
    //Given

    const array1: number[] = [1, 2, 2, 2, 22, 3, 5, 1, 5];

    //When

    const result: number = mostFrequent(array1);

    //Then

    expect(result).toEqual(2);
  });

  test("should return the first most frequent number in case of a tie", () => {
    //Given

    const array2: number[] = [1, 2, 2, 2, 3, 5, 1, 1, 5];

    //When

    const result: number = mostFrequent(array2);

    //Then

    expect(result).toEqual(1);
  });
});
