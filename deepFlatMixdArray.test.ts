import { deepFlatMixedArray } from "./deepFlatMixdArray";

describe("test deepFlatMixeArray function", () => {
  test("should return a flat array", () => {
    //Given

    const array = [1, [2, [3, [4]]]];

    //When

    const result = deepFlatMixedArray(array);

    //Then

    expect(result).toEqual([1, 2, 3, 4]);
  });
});
