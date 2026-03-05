import { groupByYear } from "./groupByYear";

describe("test groupByYear function", () => {
  test("should return dates grouped by year", () => {
    //Given

    const array = [
      { d: "2024-01-01" },
      { d: "2024-15-12" },
      { d: "2025-01-01" },
    ];

    //When

    const result = groupByYear(array);

    //Then

    expect(result).toEqual({
      "2024": [{ d: "2024-01-01" }, { d: "2024-15-12" }],
      "2025": [{ d: "2025-01-01" }],
    });
  });
});
