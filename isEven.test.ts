import { isEven } from "./isEven";

describe("test fucntion is Even", () => {
  test("should return true if the number is even", () => {
    // Given

    const a = 2;

    // When

    const result = isEven(a);

    //Then
    expect(result).toBeTruthy;
  });
  test("should return false if the number is not even", () => {
    // Given

    const a = 3;

    // When

    const result = isEven(a);

    //Then
    expect(result).toBeFalsy;
  });
});
