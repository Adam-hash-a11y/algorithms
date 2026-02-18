function sumPairToTen(arr: number[]) {
  const testArray = [...arr];
  const resultArray = [];
  const usedNumbers = [];

  for (let i = 0; i < testArray.length; i++) {
    let item = testArray[i];
    let j = 0;
    while (j < testArray.length && item + testArray[j] != 10) {
      j++;
    }

    if (item + testArray[j] === 10 && i !== j) {
      if (
        usedNumbers.indexOf(item) == -1 &&
        usedNumbers.indexOf(testArray[j]) == -1
      ) {
        usedNumbers.push(item, testArray[j]);
        resultArray.push([item, testArray[j]]);
      }
    }
  }
  return resultArray;
}

let array = [1, 9, 8, 2, 5];
console.log(sumPairToTen(array));
