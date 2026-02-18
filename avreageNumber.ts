function averageNumber(arr: number[]) {
  let sum: number = 0;
  let avg: number = 0;
  let mostCloseToAverage = 0;
  let distance = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  let minDistance = Math.abs(arr[0] - avg);
  for (let i = 0; i < arr.length; i++) {
    distance = Math.abs(arr[i] - avg);
    if (distance < minDistance) {
      minDistance = distance;
      mostCloseToAverage = arr[i];
    }
  }
  return mostCloseToAverage;
}
const arr = [6, 4, 2];
console.log(averageNumber(arr));
