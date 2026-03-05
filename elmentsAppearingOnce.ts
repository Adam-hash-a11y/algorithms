export function elmentsAppearingOnce(arr: number[]): number[] {
  const resultArray = [];
  for (const element of arr) {
    if (arr.indexOf(element) === arr.lastIndexOf(element)) {
      resultArray.push(element);
    }
  }
  return resultArray;
}
