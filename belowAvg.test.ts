import { belowAvg } from "./belowAvg";

describe("test belowAvg function", () => {
  test("should return an array that contains number above average of the array", () => {
    //Given

    const array = [10, 20, 30];

    //When

    const result = belowAvg(array);

    //Then

    expect(result).toEqual([30]);
  });
});
