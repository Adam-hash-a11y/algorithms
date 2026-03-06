import { truthyValues } from "./truthyValues";

describe("test truthyValues function", () => {
  test("should return the number of truthy values", () => {
    //Given

    const array = [0, 1, true, false, 2];

    //When

    const result = truthyValues(array);

    //Then

    expect(result).toEqual(3);
  });
  test("should return 0 if there are no truthy values", () => {
    //Given

    const array = [0, undefined, false];

    //When

    const result = truthyValues(array);

    //Then

    expect(result).toEqual(0);
  });
  test("should return 0 if they array is empty", () => {
    //Given

    const array: any[] = [];

    //When

    const result = truthyValues(array);

    //Then

    expect(result).toEqual(0);
  });
});
