import { leaderBord } from "./leaderBoard";

describe("test leaderBord function", () => {
  test("should return a desceding order leader border of users", () => {
    //Given

    const array = [
      { n: "A", s: 20 },
      { n: "B", s: 50 },
    ];

    //When

    const result = leaderBord(array);

    //Then

    expect(result).toEqual(["B", "A"]);
  });
});
