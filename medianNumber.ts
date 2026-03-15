export function medianNumber(arr: number[]) {
  let sum: number = 0;
  let mostCloseToAverage = arr[0];
  for (const element of arr) {
    sum += element;
  }
  const avg = sum / arr.length;
  let minDistance = Math.abs(arr[0] - avg);
  for (const element of arr) {
    const distance = Math.abs(element - avg);
    if (distance < minDistance) {
      minDistance = distance;
      mostCloseToAverage = element;
    }
  }
  return mostCloseToAverage;
}
