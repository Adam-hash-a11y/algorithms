import { removeEmptyObject } from "./RemoveEmptyObjects";

describe("test removeEmptyObject function", () => {
  test("should return an array that contain objects that have values", () => {
    //Given

    const array = [{}, { a: 1, b: 2 }, {}, {}];

    //When

    const result = removeEmptyObject(array);

    //Then

    expect(result).toEqual([{ a: 1, b: 2 }]);
  });
});
