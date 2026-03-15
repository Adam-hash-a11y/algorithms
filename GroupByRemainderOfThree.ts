export function groupByRemainderOfThree(arr: number[]): {
  [key: string]: number[];
} {
  const resultObj: { [key: string]: number[] } = {};
  for (const element of arr) {
    const currentNumber: number = element;
    if (resultObj[currentNumber % 3]) {
      resultObj[currentNumber % 3].push(currentNumber);
    } else {
      resultObj[currentNumber % 3] = [currentNumber];
    }
  }
  return resultObj;
}
