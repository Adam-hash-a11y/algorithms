export function addExclamationToString(arr: string[]): string[] {
  const resultArray: string[] = [];
  for (const element of arr) {
    resultArray.push(element + "!");
  }
  return resultArray;
}


