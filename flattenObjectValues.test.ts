import { flattenObjectValue } from "./flattenObjectValues";
describe("test flattenObjectValue fucntion", () => {
  test("should return an array that contains all the values in the initial object", () => {
    //Given

    const obj = { a: [1], b: [2, 3] };

    //When

    const result = flattenObjectValue(obj);

    //Then

    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
  });
});
