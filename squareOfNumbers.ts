export function squareNumbers(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}
