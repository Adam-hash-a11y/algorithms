import { deepFlat } from "./app55";

describe("test function deeoFlat", () => {
  test("should return a flat array", () => {
    //Given

    const array = [1, [2, [3]]];

    //When

    const result = deepFlat(array);

    //Then

    expect(result).toEqual([1, 2, 3]);
  });
});
