export function sortByAge(arr: { a: number }[]): number[] {
  const resultArray = [];

  for (const element of arr) {
    resultArray.push(element.a);
  }
  for (let i = 0; i < resultArray.length; i++) {
    for (let j = 0; j < resultArray.length - 1 - i; j++) {
      if (resultArray[j] < resultArray[j + 1]) {
        const temp: number = resultArray[j];
        resultArray[j] = resultArray[j + 1];
        resultArray[j + 1] = temp;
      }
    }
  }
  return resultArray;
}


