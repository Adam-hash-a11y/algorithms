import { isPositive } from "./removeNegativeNumbers";

describe("test ispostive function", () => {
  test("should return true if the number is postive", () => {
    //Given

    const a: number = 5;

    //When

    const result: boolean = isPositive(a);

    //Then

    expect(result).toBeTruthy;
  });

  test("should return false if the number is negative", () => {
    //Given

    const b: number = -5;

    //When

    const result: boolean = isPositive(b);

    //Then

    expect(result).toBeFalsy;
  });
  test("should return true if the number is equal to zero", () => {
    //Given

    const c: number = 0;

    //When

    const result: boolean = isPositive(c);

    //Then

    expect(result).toBeTruthy;
  });
});
