function sumNumbers(arr: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arrayOfNumber: number[] = [1, 2, 3, 4];

console.log(sumNumbers(arrayOfNumber));
