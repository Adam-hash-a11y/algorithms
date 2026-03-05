export function groupWordsBylength(arr: string[]): { [key: number]: string[] } {
  const resultObject: { [key: number]: string[] } = {};
  for (const element of arr) {
    if (resultObject[element.length]) {
      resultObject[element.length].push(element);
    } else {
      resultObject[element.length] = [element];
    }
  }
  return resultObject;
}

