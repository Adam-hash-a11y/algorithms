export function sortDatesByYear(arr: string[]): string[] {
  const resultArray = [...arr];

  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < resultArray.length - 1 - i; j++) {
      if (
        Number.parseInt(resultArray[j].substring(0, 4)) <
        Number.parseInt(resultArray[j + 1].substring(0, 4))
      ) {
        const temp = resultArray[j];
        resultArray[j] = resultArray[j + 1];
        resultArray[j + 1] = temp;
      }
    }
  }
  return resultArray;
}


