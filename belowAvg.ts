export function belowAvg(arr: number[]): number[] {
  const resultArray = [];
  let avg = 0;
  let sum = 0;

  for (const element of arr) {
    sum += element;
  }
  avg = sum / arr.length;
  for (const element of arr) {
    if (element > avg) {
      resultArray.push(element);
    }
  }
  return resultArray;
}
