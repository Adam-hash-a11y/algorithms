import { letterFrquency } from "./letterFrequency";

describe("test function letter Frquency", () => {
  test("should the frequency of each letter", () => {
    //Given

    const array = ["a", "b", "a"];

    //When

    const result = letterFrquency(array);

    //Then

    expect(result).toEqual({ a: 2, b: 1 });
  });
});
