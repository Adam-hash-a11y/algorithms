export function smallestNumber(arr: number[]): number {
  let min = arr[0];
  for (const element of arr) {
    if (element < min) {
      min = element;
    }
  }
  return min;
}
