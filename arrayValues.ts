export function arrayValues(arr1: number[], arr2: number[]): boolean {
  if (arr1.length === arr2.length) {
    for (const element of arr1) {
      if (!arr2.includes(element)) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
