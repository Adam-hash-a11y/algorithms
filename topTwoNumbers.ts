export function topTwo(arr: number[]): number[] {
  if (arr.length === 0) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      const temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return [arr.at(-1)!, arr.at(-2)!];
}
