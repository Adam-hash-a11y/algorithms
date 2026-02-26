export function reverseArrayBackward(arr: number[]): number[] {
  const reversedArray: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
