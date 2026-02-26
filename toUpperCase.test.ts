import { makeUpperCase } from "./toUpperCase";

describe("test function makeUpperCase", () => {
  test("should return the intial array of string in uppercase", () => {
    //Given

    const array: string[] = ["adam", "hamdi"];

    //When

    const result = makeUpperCase(array);

    //Then

    expect(result).toEqual(["ADAM", "HAMDI"]);
  });
});
