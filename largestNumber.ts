export function largestNumber(arr: number[]): number {
  let max = 0;
  for (const element of arr) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}
