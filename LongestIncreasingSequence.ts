export function longSequence(arr: number[]): number {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += 1;
    if (arr[i] > arr[i + 1]) {
      if (temp > max) {
        max = temp;
      }
      temp = 0;
    }
  }
  if (temp > max) {
    max = temp;
  }

  return max;
}

