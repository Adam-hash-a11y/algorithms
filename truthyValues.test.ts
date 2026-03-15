import { truthyValues } from "./truthyValues";

type arrayTypes = number | boolean | string | undefined;

describe("test truthyValues function", () => {
  test("should return the number of truthy values", () => {
    //Given

    const array: arrayTypes[] = [0, 1, true, false, 2];

    //When

    const result = truthyValues(array);

    //Then

    expect(result).toEqual(3);
  });
  test("should return 0 if there are no truthy values", () => {
    //Given

    const array: arrayTypes[] = [0, undefined, false];

    //When

    const result = truthyValues(array);

    //Then

    expect(result).toEqual(0);
  });
  test("should return 0 if they array is empty", () => {
    //Given

    const array: arrayTypes[] = [];

    //When

    const result = truthyValues(array);

    //Then

    expect(result).toEqual(0);
  });
});
