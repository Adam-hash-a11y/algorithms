import { normalizeEmails } from "./normalizeEmail";

describe("test normalizeEmail function", () => {
  test("should return a normal email without any inner or outer spaces", () => {
    //Given

    const array = ["  Test @GMAIL.com   "];

    //When

    const result = normalizeEmails(array);

    //Then

    expect(result).toEqual(["test@gmail.com"]);
  });
});
