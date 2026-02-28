import { isFalsy } from "./removeFalsyValues";

describe("test function isfalsy", () => {
  test("should return true if the value is truthy", () => {
    //Given

    const a: number = 5;

    //WHen

    const result: boolean = isFalsy(a);

    //Then

    expect(result).toBeTruthy();
  });

  test("should return false if the value is falsy", () => {
    expect(isFalsy("")).toBeFalsy();
    expect(isFalsy(0)).toBeFalsy();
    expect(isFalsy(null)).toBeFalsy();
    expect(isFalsy(undefined)).toBeFalsy();
    expect(isFalsy(false)).toBeFalsy();
  });
});
