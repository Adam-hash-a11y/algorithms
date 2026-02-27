import { hasFive } from "./hasFive";

describe("test function hasFive", () => {
  test("should return true if the array contains the number five", () => {
    //Given

    const array: number[] = [1, 5, 10, 3, 88];

    //When

    const result: boolean = hasFive(array);

    //Then

    expect(result).toBeTruthy;
  });

  test("should retunrn false if the array does not contain the number five", () => {
    //When

    const array: number[] = [1, 2, 3, 4, 6];

    //When

    const result: boolean = hasFive(array);

    //Then

    expect(result).toBeFalsy;
  });
});
