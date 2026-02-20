import { isValidEmail } from "./app2";

describe("test function isValidEmail", () => {
  test("should return true if email is valid", () => {
    // given
    const a = "adam@gmail.com";

    // when
    const result = isValidEmail(a);

    // then
    expect(result).toBeTruthy();
  });
  test("should return false if email is not", () => {
    // given
    const a = "@gmail.com";

    // when
    const result = isValidEmail(a);

    // then
    expect(result).toBe(false);
  });
});
