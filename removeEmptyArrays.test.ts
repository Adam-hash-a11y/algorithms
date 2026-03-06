import { removeEmptyArrays } from "./removeEmptyArrays";
describe(" test removeEmptyArrays  function", () => {
  test("should return an array that contains non empty arrays", () => {
    //Given

    const array = [[1], [], [2]];

    //When

    const result = removeEmptyArrays(array);

    //Then

    expect(result).toEqual([[1], [2]]);
  });
});
