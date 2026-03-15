import { twoOrders } from "./twoOrders";

describe("test function twoOrdes", () => {
  test("should return an array of users with at least 2 orders", () => {
    //Given

    const array = [{ o: [1, 2] }, { o: [1] }];

    //When

    const result = twoOrders(array);

    //Then

    expect(result).toEqual([{ o: [1, 2] }]);
  });
});
