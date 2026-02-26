import { removeDuplicates } from "./removeDuplicates";

describe("test function removeDuplicates", () => {
  test("should return an array without any duplciate number from the initial array", () => {
    //Given

    const array = [1, 2, 2, 3, 3, 2, 5, 5];

    //When

    const result = removeDuplicates(array);

    //Then

    expect(result).toEqual([1, 2, 3, 5]);
  });
});
