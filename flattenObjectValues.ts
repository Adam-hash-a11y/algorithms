export function flattenObjectValue(obj: { [key: string]: number[] }): number[] {
  const resultArray = [];

  for (const key in obj) {
    for (const element of obj[key]) {
      resultArray.push(element);
    }
  }
  return resultArray;
}


