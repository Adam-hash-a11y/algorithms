import { allSubstrings } from "./allSubstrings";
describe("test allSubstrings fucntion", () => {
  test("should return an array that conatins all the substring of teh intial string", () => {
    //Given

    const str: string = "cat";

    //When

    const result = allSubstrings(str);

    //Then

    expect(result).toEqual(
      expect.arrayContaining(["c", "ca", "a", "cat", "at", "t"]),
    );
  });
});
