import { chunckByTwo } from "./chunkArray";

describe("test chunkBytwo function", () => {
  test("should return an array of chunked sub-arrays of size 2", () => {
    //Given

    const array: number[] = [1, 2, 3, 4, 5];

    //When

    const result: number[][] = chunckByTwo(array);

    //Then

    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });
});
