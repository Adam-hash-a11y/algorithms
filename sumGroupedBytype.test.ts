import { sumGroupedByType } from "./sumGroupedBytype";

describe("test sumGroupByType", () => {
  test("should return the sum of each group by type", () => {
    //Given

    const array = [
      { t: "a", v: 2 },
      { t: "a", v: 3 },
      { t: "b", v: 3 },
      { t: "b", v: 8 },
    ];

    //When

    const result = sumGroupedByType(array);

    //Then

    expect(result).toEqual({ a: 5, b: 11 });
  });
});
