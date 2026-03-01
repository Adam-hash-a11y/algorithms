export function missingNumbers(arr: number[]): number[] {
  const missingNumbers: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      const gap = arr[i + 1] - arr[i];
      for (let j = 0; j < gap - 1; j++) {
        missingNumbers.push(arr[i] + gap - j - 1);
      }
    }
  }
  return missingNumbers;
}
