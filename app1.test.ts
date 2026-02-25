import { biggerThanTen } from "./app1";

describe("test function bigger than five", () => {
  test("should return true if the  number is bigger than ten", () => {
    // Given
    const a = 15;

    // When
    const result = biggerThanTen(a);

    // Then

    expect(result).toBe(true);
  });

  test("should return false if the number is smaller then ten", () => {
    // Given
    const b = 7;

    // When
    const result = biggerThanTen(b);

    // Then

    expect(result).toBeFalsy;
  });
  test("should return true if the number is equal to true ten", () => {
    // Given
    const c = 10;

    // When
    const result = biggerThanTen(c);

    // Then

    expect(result).toBeTruthy;
  });
});
