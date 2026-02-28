import { groupByRole } from "./groupByRole";
describe("test function groupBy Role", () => {
  test("should return an object with each element grouped by its role", () => {
    //Given

    const array: { role: string }[] = [
      { role: "a" },
      { role: "b" },
      { role: "a" },
      { role: "a" },
      { role: "a" },
      { role: "b" },
    ];

    //When

    const result = groupByRole(array);

    //Then

    expect(result).toEqual({
      a: [{ role: "a" }, { role: "a" }, { role: "a" }, { role: "a" }],
      b: [{ role: "b" }, { role: "b" }],
    });
  });
  test("should return an empty object if the given arrray is empty", () => {
    //Given

    const array: [] = [];

    //When

    const result = groupByRole(array);

    //Then

    expect(result).toEqual({});
  });
  test("should return an object with one element if we have multiple element that have the same role", () => {
    //Given

    const array: { role: string }[] = [{ role: "a" }, { role: "a" }];

    //When

    const result = groupByRole(array);

    //Then

    expect(result).toEqual({
      a: [{ role: "a" }, { role: "a" }],
    });
  });
});
