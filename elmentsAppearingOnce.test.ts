import { elmentsAppearingOnce } from "./elmentsAppearingOnce";

describe("test elementsAppearingOnce function", () => {
  test("should return an array of numbers that only appear once", () => {
    //Given

    const array = [1, 2, 2, 3];

    //When

    const result = elmentsAppearingOnce(array);

    //Then

    expect(result).toEqual([1, 3]);
  });
});
