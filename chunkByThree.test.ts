import { chunkByThree } from "./chunkByThree";

describe("test chunkByThree Function", () => {
  test("should return an array of sub arrays chucbnked by three", () => {
    //Given

    const array = [1, 2, 3, 4, 5, 6, 7];

    //When

    const result = chunkByThree(array);

    //Then

    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });
});
