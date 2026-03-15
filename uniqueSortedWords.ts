export function uniqueSortedWords(arr: string[]): string[] {
  const resultArray: string[] = [];
  for (const element of arr) {
    const currentWord = element;
    if (!resultArray.includes(currentWord)) {
      resultArray.push(currentWord);
    }
  }
  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < resultArray.length - 1 - i; j++) {
      if (resultArray[j].charCodeAt(0) > resultArray[j + 1].charCodeAt(0)) {
        const temp = resultArray[j];
        resultArray[j] = resultArray[j + 1];
        resultArray[j + 1] = temp;
      }
    }
  }
  return resultArray;
}
