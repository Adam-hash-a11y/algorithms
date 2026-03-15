export function missingNumber(arr: number[]): number[] {
  const resultarray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      const range = arr[i + 1] - arr[i];
      for (let j = 0; j < range - 1; j++) {
        resultarray.push(arr[i] + j + 1);
      }
    }
  }
  return resultarray;
}
