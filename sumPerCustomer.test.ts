import { sumPerCumstomer } from "./sumPerCustomer";
describe("test fucntion sumPerCustomer", () => {
  test("should return an object that contains each customer and his total article prices", () => {
    //Given

    const array = [
      { c: "A", a: 10 },
      { c: "A", a: 5 },
      { c: "B", a: 20 },
      { c: "B", a: 10 },
    ];

    //when

    const result = sumPerCumstomer(array);

    //Then

    expect(result).toEqual({ A: 15, B: 30 });
  });
});
