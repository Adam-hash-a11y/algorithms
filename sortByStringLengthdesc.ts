export function sortStringsByLength(arr: string[]): string[] {
  const resultArray = [...arr];
  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < resultArray.length - 1 - i; j++) {
      const temp = resultArray[j];
      if (resultArray[j].length < resultArray[j + 1].length) {
        resultArray[j] = resultArray[j + 1];
        resultArray[j + 1] = temp;
      }
    }
  }
  return resultArray;
}

