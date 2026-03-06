export function sumGroupedByType(arr: { t: string; v: number }[]): {
  [key: string]: number;
} {
  const resultArray: { [key: string]: number } = {};
  for (const element of arr) {
    const currentElement = element;
    if (resultArray[currentElement.t]) {
      resultArray[currentElement.t] += currentElement.v;
    } else {
      resultArray[currentElement.t] = currentElement.v;
    }
  }
  return resultArray;
}
