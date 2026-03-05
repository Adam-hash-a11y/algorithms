import { tagCloud } from "./tagCloud";
describe("test tagCloud function", () => {
  test("should return the frequency of each word in the given array", () => {
    //Given

    const array = ["js", "js", "test"];

    //when

    const result = tagCloud(array);

    //Then

    expect(result).toEqual({ js: 2, test: 1 });
  });
});
