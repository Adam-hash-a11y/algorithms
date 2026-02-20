import { biggerThanTen } from "./app1";

describe("test function bigger than", () => {
  test("should return true if the number is bigger than 10", () => {
    // given
    const a = 15;

    // when
    const result = biggerThanTen(a);

    // then
    expect(result).toBe(true);
  });

  test("should return false if the number is lower than 10", () => {
    // given
    const b = 8;

    // when
    const result = biggerThanTen(b);

    // then
    expect(result).toBe(false);
  });

  test("should return true if the number is equal to 10", () => {
    // given
    const b = 10;

    // when
    const result = biggerThanTen(b);

    // then
    expect(result).toBeTruthy();
  });
});
