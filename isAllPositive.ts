export function isAllPostiveNumbers(arr: number[]): boolean {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < 0) {
      return false;
    }
    i++;
  }
  return true;
}
