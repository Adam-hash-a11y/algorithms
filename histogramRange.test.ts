import { historgramRange } from "./histogramRange";

describe("test historgramRange function", () => {
  test("should return the count of number belonging to their respective histohram range", () => {
    //Given

    const array = [-2, -5, 9, 10, 12, 50, 33, 5, 1000];

    //When

    const result = historgramRange(array);

    //Then

    expect(result).toEqual({
      "-10--1": 2,
      "0-9": 2,
      "10-19": 2,
      "50-59": 1,
      "30-39": 1,
      "1000-1009": 1,
    });
  });
});
