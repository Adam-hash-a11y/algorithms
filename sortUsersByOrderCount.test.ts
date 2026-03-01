import { sortUserByOrderCount } from "./sortUsersByOrderCount";

describe("test  sortUserByOrderCount function", () => {
  test("should return users sorted by order count in descending order", () => {
    //Given

    const array = [{ o: [1, 2] }, { o: [1] }, { o: [1, 2, 5, 6] }];

    //When

    const result = sortUserByOrderCount(array);

    //Then

    expect(result).toEqual(["userC", "userA", "userB"]);
  });
});
