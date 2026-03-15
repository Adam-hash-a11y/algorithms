export function productsInTwoCarts(arr: number[][]): number[] {
  const resultArray = [];
  const resultObject: { [key: string]: number } = {};
  for (const element of arr) {
    const currentArray = element;
    const deDupArray: number[] = [];
    for (const element of currentArray) {
      if (!deDupArray.includes(element)) {
        deDupArray.push(element);
      }
    }
    for (const element of deDupArray) {
      if (resultObject[element]) {
        resultObject[element] += 1;
      } else {
        resultObject[element] = 1;
      }
    }
  }
  for (const key in resultObject) {
    if (resultObject[key] >= 2) {
      resultArray.push(Number(key));
    }
  }
  return resultArray;
}
