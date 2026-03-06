import { lastLogin } from "./lastLogin";

describe("test lastLogin function", () => {
  test("should return a sorted array by year desending  order", () => {
    //Given

    const array = [{ l: 2024 }, { l: 2025 }];

    //When

    const result = lastLogin(array);

    //Then

    expect(result).toEqual([ { l: 2025 }, { l: 2024 } ])
  });
});
