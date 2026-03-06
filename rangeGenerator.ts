export function rangeGenerator(arr: number[]): number[] {
  const resultArray: number[] = [];
  let range = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 < arr[i + 1]) {
      resultArray.push(arr[i]);
      range = arr[i + 1] - arr[i];
      for (let j = 0; j < range - 1; j++) {
        resultArray.push(arr[i] + j + 1);
      }
    } else {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}
