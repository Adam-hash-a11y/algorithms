import { sortObjectsByAge } from "./sortByAge";

describe("test function sortObjectsByAge", () => {
  test("should return an array sorted By age in ascending order using bubble sort", () => {
    //Given

    const array = [{ age: 30 }, { age: 50 }, { age: 90 }, { age: 10 }];

    //When

    const result = sortObjectsByAge(array);

    //Then

    expect(result).toEqual([
      { age: 10 },
      { age: 30 },
      { age: 50 },
      { age: 90 },
    ]);
  });
  test("should return an empty array if the given initial array is empty", () => {
    //Given

    const array: { age: number }[] = [];

    //When

    const result = sortObjectsByAge(array);

    //Then

    expect(result).toEqual([]);
  });
});
