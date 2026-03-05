export function leaderBord(arr: { n: string; s: number }[]): string[] {
  const finalLeaderBoard: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const temp = arr[j];
      if (arr[j].s < arr[j + 1].s) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  for (const element of arr) {
    finalLeaderBoard.push(element.n);
  }
  return finalLeaderBoard;
}
