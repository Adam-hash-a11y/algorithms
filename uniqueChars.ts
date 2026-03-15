export function uniqueChars(arr: string[]): string[] {
  const resultArray: string[] = [];
  for (const element of arr) {
    const currentWord = element;
    for (const element of currentWord) {
      if (!resultArray.includes(element)) {
        resultArray.push(element);
      }
    }
  }
  return resultArray;
}

