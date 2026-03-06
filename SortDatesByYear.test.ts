import { sortDatesByYear } from "./SortDatesByYear";
describe("test  sortDatesByYear function", () => {
  test("should return a sorted array of dates in descing order", () => {
    //Given

    const array = ["2024-01-01", "2025-01-01"];

    //When

    const result = sortDatesByYear(array);

    //Then

    expect(result).toEqual(["2025-01-01", "2024-01-01"]);
  });
});
