import { medianNumber } from "./medianNumber";
describe("test medianNumber function", () => {
  test("should return the median number of the given array", () => {
    //Given

    const array = [1, 3, 5];

    //When

    const result = medianNumber(array);

    //Then

    expect(result).toEqual(3);
  });
});
