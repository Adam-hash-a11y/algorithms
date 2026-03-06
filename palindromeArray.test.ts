import { palindromeArray } from "./palindromeArray";
describe("test palindromeArray function", () => {
  test("should return true if the array is palindrome", () => {
    //Given

    const array = ["a", "b", "a"];

    //When

    const result = palindromeArray(array);

    //Then

    expect(result).toBeTruthy();
  });
  test("should return false if the array is palindrome", () => {
    //Given

    const array = ["a", "b", "b"];

    //When

    const result = palindromeArray(array);

    //Then

    expect(result).toBeFalsy();
  });
  test("should return true if the array is empty", () => {
    //Given

    const array: string[] = [];

    //When

    const result = palindromeArray(array);

    //Then

    expect(result).toBeTruthy();
  });
});
