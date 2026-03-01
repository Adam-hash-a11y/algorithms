import { sumPairToTen } from "./pairSumToTen";
describe("test function sumPairToTen", () => {
  test("should return an array that contain sub arrays that sum up to the number ten", () => {
    //Given

    const array = [1, 9, 8, 5, 2];

    //When

    const result = sumPairToTen(array);

    //Then

    expect(result).toEqual([
      [1, 9],
      [8, 2],
    ]);
  });
});
