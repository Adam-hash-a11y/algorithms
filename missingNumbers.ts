function missingNumbers(arr: number[]) {
  let missingNumbers: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      let gap = arr[i + 1] - arr[i];
      console.log(gap);
      for (let j = 0; j < gap - 1; j++) {
        missingNumbers.push(arr[i] + gap - j - 1);
      }
    }
  }
  return missingNumbers;
}

const array = [1, 2, 4, 10];
console.log(missingNumbers(array));
