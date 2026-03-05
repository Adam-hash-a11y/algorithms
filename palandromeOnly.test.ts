import { palindromesOnly } from "./palandromeOnly";
describe("test function palindrome Only", () => {
  test("should return only palindrome words", () => {
    //Given

    const array = ["madam", "car", "level", "cattac"];

    //When

    const result = palindromesOnly(array);

    //Then

    expect(result).toEqual(["madam", "level", "cattac"]);
  });
});
