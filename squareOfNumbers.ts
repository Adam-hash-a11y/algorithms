function squareNumbers(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

const array = [2, 4, 6];
console.log(squareNumbers(array));
