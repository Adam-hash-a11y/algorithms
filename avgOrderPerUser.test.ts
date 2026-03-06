import { avgOrderUser } from "./avgOrderPerUser";
describe("test avgOrderUser function", () => {
  test("should return an array that contains the average orders per user", () => {
    //Given

    const array = [{ o: [10, 20] }, { o: [5] }];

    //When

    const result = avgOrderUser(array);

    //Then

    expect(result).toEqual([15, 5]);
  });
});
