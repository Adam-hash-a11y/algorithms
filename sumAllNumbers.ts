export function sumNumbers(arr: number[]): number {
  let sum: number = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
}
