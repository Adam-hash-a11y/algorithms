export function sumPairToTen(arr: number[]): number[][] {
  const testArray = [...arr];
  const resultArray: number[][] = [];
  const usedNumbers: number[] = [];

  for (let i = 0; i < testArray.length; i++) {
    const item = testArray[i];
    let j = 0;
    while (j < testArray.length && item + testArray[j] != 10) {
      j++;
    }
    if (item + testArray[j] === 10 && i !== j) {
      if (!usedNumbers.includes(item) && !usedNumbers.includes(testArray[j])) {
        usedNumbers.push(item, testArray[j]);
        resultArray.push([item, testArray[j]]);
      }
    }
  }
  return resultArray;
}
