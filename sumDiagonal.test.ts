import { sumDiag } from "./sumDiagonal";

describe("test sumDiag function", () => {
  test("should return the sum of the diagonal of the given matrix", () => {
    //Given

    const array = [
      [1, 2, 6],
      [4, 5, 7],
      [8, 9, 3],
    ];

    //When

    const result = sumDiag(array);

    //Then

    expect(result).toEqual(9);
  });
});
