import { nestedComments } from "./nestedCommentsCount";

describe("test function nestedComments", () => {
  test("should retunr the number of comments", () => {
    //Given

    const array = [{ r: [{}, {}] }];

    //When

    const result = nestedComments(array);

    //Then

    expect(result).toEqual(2);
  });
});
