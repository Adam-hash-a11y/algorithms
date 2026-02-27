export function mergeArrays(arr: number[], arr2: number[]): number[] {
  return arr.concat(arr2);
}

export function removeDups(arr: number[]): number[] {
  const cleanArray: number[] = [];

  for (const element of arr) {
    if (!cleanArray.includes(element)) {
      cleanArray.push(element);
    }
  }
  return cleanArray;
}

export function mergeAndDedupe(arr1: number[], arr2: number[]): number[] {
  return removeDups(mergeArrays(arr1, arr2));
}
