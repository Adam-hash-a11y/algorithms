import { averageNumber } from "./avreageNumber";

describe("test fucntion avrageNumber", () => {
  test("should return the average number in the array ", () => {
    //Given

    const array = [4, 6, 2];

    //When

    const result: number = averageNumber(array);

    //Then

    expect(result).toEqual(4);
  });
});
