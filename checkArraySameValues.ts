export function checkArraySameValues(arr: number[], arr2: number[]): boolean {
  if (arr.length == arr2.length) {
    let i: number = 0;

    while (i < arr.length && arr2.includes(arr[i])) {
      i++;
    }
    if (i < arr.length && !arr2.includes(arr[i])) {
      return false;
    }
  } else {
    return false;
  }
  return true;
}
