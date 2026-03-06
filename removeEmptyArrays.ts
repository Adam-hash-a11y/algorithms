export function removeEmptyArrays(arr: number[][]): number[][] {
  const resultArray = [];
  for (const element of arr) {
    if (element.length != 0) {
      resultArray.push(element);
    }
  }
  return resultArray;
}

