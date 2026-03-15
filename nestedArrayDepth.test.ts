import { nestedArrayDepth } from "./nestedArrayDepth";

describe("test function nestedArrayDepth", () => {
  test("should return the depth of the given Array", () => {
    //Given

    const array = [1, [2, [3]]];

    //When

    const result = nestedArrayDepth(array);

    //Then

    expect(result).toEqual(2);
  });
});
