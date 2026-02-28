import { totaleCartPrice } from "./totalCartPrice";
describe("test function totaleCartPrice", () => {
  test("should return the totale price of all teh items in the cart", () => {
    //Given

    const array = [
      { p: 10, q: 2 },
      { p: 5, q: 3 },
    ];

    //When

    const result: number = totaleCartPrice(array);

    //Then

    expect(result).toEqual(35);
  });
  test("should return 0 if the array is empty ", () => {
    //Given

    const array: { p: number; q: number }[] = [];

    //When

    const result: number = totaleCartPrice(array);

    //Then

    expect(result).toEqual(0);
  });
});
