import { highestSpent } from "./highestSpentCustomer";

describe("test highestSpent function", () => {
  test("should return the highest spending customer", () => {
    //Given

    const array = [
      { n: "A", s: 20 },
      { n: "B", s: 50 },
      { n: "B", s: 70 },
    ];

    //When

    const result = highestSpent(array);

    //Then

    expect(result).toEqual({ n: "B", s: 70 });
  });
});
