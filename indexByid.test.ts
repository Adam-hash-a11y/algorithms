import { indexByid } from "./indexByid";

describe("test indexById function", () => {
  test("should return object indexed by id ", () => {
    //Given

    const array = [{ id: 1 }, { id: 2 }];

    //When

    const result = indexByid(array);

    //Then

    expect(result).toEqual({
      "1": { id: 1 },
      "2": { id: 2 },
    });
  });
  test("should handle duplicates (last one wins)", () => {
    //Given

    const array = [{ id: 1 }, { id: 1 }, { id: 2 }];

    //When

    const result = indexByid(array);

    //Then
    expect(result).toEqual({
      "1": { id: 1 },
      "2": { id: 2 },
    });
  });
  test("should handle single element", () => {
    //Given

    const array = [{ id: 5 }];

    //When

    const result = indexByid(array);

    //Then
    expect(result).toEqual({
      "5": { id: 5 },
    });
  });
  test("should handle large ids", () => {
    //Given

    const array = [{ id: 100 }, { id: 999 }];

    //When
    const result = indexByid(array);

    //Then
    expect(result).toEqual({
      "100": { id: 100 },
      "999": { id: 999 },
    });
  });
});
