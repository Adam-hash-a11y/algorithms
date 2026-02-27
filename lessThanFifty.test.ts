import { isLessThanFifty } from "./lessThanFifty";
describe("test function isLessThanFifity", () => {
  test("should return true if the given number is bigger than 50", () => {
    //Given

    const a: number = 99;

    //When

    const result: boolean = isLessThanFifty(a);

    //Then

    expect(result).toBeTruthy;
  });

  test("should return false if the given number is samller than 50", () => {
    //Given

    const b: number = 40;

    //When

    const result: boolean = isLessThanFifty(b);

    //Then

    expect(result).toBeFalsy;
  });

  test("should return false if the given number is equal to 50", () => {
    //Given

    const c: number = 50;

    //When

    const result: boolean = isLessThanFifty(c);

    //Then

    expect(result).toBeFalsy;
  });
});
