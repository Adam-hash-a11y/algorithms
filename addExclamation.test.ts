import { addExclamationToString } from "./addExclamation";

describe("test function addExclamationToString ", () => {
  test("should return each string in the array with an exclamation mark", () => {
    //Given

    const array = ["hi", "hello"];

    //When

    const result: string[] = addExclamationToString(array);

    //Then

    expect(result).toEqual(["hi!", "hello!"]);
  });
});
