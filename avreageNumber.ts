export function averageNumber(arr: number[]) {
  let sum: number = 0;
  let avg: number = 0;
  let mostCloseToAverage = arr[0];
  let distance = 0;
  for (const element of arr) {
    sum += element;
  }
  avg = sum / arr.length;
  let minDistance = Math.abs(arr[0] - avg);
  for (const element of arr) {
    distance = Math.abs(element - avg);
    if (distance < minDistance) {
      minDistance = distance;
      mostCloseToAverage = element;
    }
  }
  return mostCloseToAverage;
}
const arr = [4, 6, 2];
console.log(averageNumber(arr));
