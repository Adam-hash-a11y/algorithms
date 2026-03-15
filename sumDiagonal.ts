export function sumDiag(arr: number[][]): number {
  let res: number = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) {
        res += arr[j][i];
      }
    }
  }
  return res;
}
