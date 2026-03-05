import { sortUserByOrderCount } from "./sortUsersByOrderCount";
describe("test sortUserByOrderCount function", () => {
  test("should return a sorted array of users by desending order count", () => {
    //Given

    const array = [{ o: [1, 2] }, { o: [1] }, { o: [1, 2, 5, 6] }];

    //When

    const result = sortUserByOrderCount(array);

    //Then

    expect(result).toEqual(["userC", "userA", "userB"]);
  });
});
