function sumEvenNumber(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const array = [1, 2, 3, 4, 3, 3, 6];

console.log(sumEvenNumber(array));
