export function ValidateIncreasingArray(arr: number[]): boolean {
  let i = 0;
  while (i < arr.length && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i < arr.length && arr[i] > arr[i + 1]) {
    return false;
  } else {
    return true;
  }
}
