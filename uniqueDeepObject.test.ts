import { uniqueDeepObjects } from "./uniqueDeepObject";

describe("test uniqueDeepObjects function", () => {
  test("shoudl return unqiue objects", () => {
    //Given

    const array = [{ a: 1 }, { a: 1 }, { a: 2 }];

    //When

    const result = uniqueDeepObjects(array);

    //Then

    expect(result).toEqual([{ a: 1 }, { a: 2 }]);
  });
});
