import { rangeGenerator } from "./rangeGenerator";

describe("test rangeGenartor function", () => {
  test("should return generated range array", () => {
    //Given

    const array = [1, 5];

    //When

    const result = rangeGenerator(array);

    //Then

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  test("should return generated range array if the range starts from the second elemnt", () => {
    //Given

    const array = [1, 2, 5];

    //When

    const result = rangeGenerator(array);

    //Then

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
