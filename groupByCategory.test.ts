import { groupByCategory } from "./groupByCategory";

describe("test function groupByCategory", () => {
  test("should return object that have grouped objects by their categories", () => {
    //Given

    const array = [{ c: "a" }, { c: "c" }, { c: "b" }];

    //when

    const result = groupByCategory(array);

    //Then

    expect(result).toEqual({
      a: [{ c: "a" }],
      c: [{ c: "c" }],
      b: [{ c: "b" }],
    });
  });
});
