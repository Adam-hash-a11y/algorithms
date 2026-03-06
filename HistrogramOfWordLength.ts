export function histogramWordsLength(arr: string[]): { [key: number]: number } {
  const resultObject: { [key: number]: number } = {};
  for (const element of arr) {
    if (resultObject[element.length]) {
      resultObject[element.length] += 1;
    } else {
      resultObject[element.length] = 1;
    }
  }
  return resultObject;
}

