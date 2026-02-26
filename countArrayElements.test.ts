import { countArrayElements } from "./countArrayElements";

describe("test function countArrayElements", () => {
  test("should return the length of the Given Array", () => {
    //Given

    const array: any[] = ["a", "b", "c", 9, { a: 5, c: 9 }];

    //When

    const result: number = countArrayElements(array);

    //Then

    expect(result).toEqual(5);
  });
});
