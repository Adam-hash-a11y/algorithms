import { arrayValues } from "./arrayValues";
describe("test arrayValues function", () => {
  test("should return true if both arrays have the same values", () => {
    //Given

    const array1 = [1, 2, 3];

    const array2 = [3, 2, 1];

    //When

    const result = arrayValues(array1, array2);

    //Then

    expect(result).toBeTruthy();
  });
});
