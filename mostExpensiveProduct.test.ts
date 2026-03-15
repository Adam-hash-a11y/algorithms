import { mostExpensive } from "./mostExpensiveProduct";

describe("test mostEpensive function", () => {
  test("should return the most expensive product from the array", () => {
    //Given

    const array = [{ p: 10 }, { p: 50 }];

    //WHen

    const result = mostExpensive(array);

    //Then

    expect(result).toEqual({ p: 50 });
  });
});
