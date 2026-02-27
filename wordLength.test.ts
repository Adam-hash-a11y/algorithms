import { wordlength } from "./wordLength";

describe("test function wordLength", () => {
  test("should return the length of each string respectivly", () => {
    //Given

    const array: string[] = ["cat", "elephant"];

    //When

    const result: number[] = wordlength(array);

    //Then

    expect(result).toEqual([3, 8]);
  });
});
