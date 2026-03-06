export function belowAvg(arr: number[]): number[] {
  const resultArray = [];
  let avg = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

const array = [10, 20, 30];
console.log(belowAvg(array));
