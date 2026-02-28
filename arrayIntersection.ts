export function arraysIntersection(arr: number[], arr2: number[]): number[] {
  const resultArray: number[] = [];
  for (const element of arr) {
    if (arr2.includes(element)) {
      resultArray.push(element);
    }
  }
  return resultArray;
}
