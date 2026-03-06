import { rotateToright } from "./rotateToRight";

describe("test rotateToRight function", () => {
  test("should return an array rotated to right", () => {
    //Given

    const array = [1, 2, 3];

    //When

    const result = rotateToright(array);

    //Then

    expect(result).toEqual([3, 1, 2]);
  });
});
