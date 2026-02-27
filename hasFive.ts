export function hasFive(arr: number[]): boolean {
  let i = 0;

  while (i < arr.length && arr[i] != 5) {
    i++;
  }

  if (arr[i] == 5) {
    return true;
  } else {
    return false;
  }
}
