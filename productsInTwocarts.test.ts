import { productsInTwoCarts } from "./productsInTwocarts";

describe("test productsInTwoCarts function", () => {
  test("should return an array that contains all the products that appear more than once in carts", () => {
    //Given
    const array = [[1, 2], [2, 3], [2]];

    //When

    const result = productsInTwoCarts(array);

    //Then

    expect(result).toEqual([2]);
  });
});
