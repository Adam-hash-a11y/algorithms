import { flattenAllItems } from "./flattenAllItems";
describe("test function flatten All items", () => {
  test("should return a flat array of all items from an array of objects ", () => {
    //Given

    const array = [{ items: [1, 2] }, { items: [3] }];

    //When

    const result = flattenAllItems(array);

    //Then

    expect(result).toEqual([1, 2, 3]);
  });
  test("should return an empty array  ", () => {
    //Given

    const array1: { items: number[] }[] = [];

    //When

    const result = flattenAllItems(array1);

    //Then

    expect(result).toEqual([]);
  });
});
