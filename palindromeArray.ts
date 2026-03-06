export function palindromeArray(arr: string[]): boolean {
  let leftIndex = 0;
  let rightindex = arr.length - 1;
  while (arr[leftIndex] == arr[rightindex] && rightindex > leftIndex) {
    leftIndex++;
    rightindex--;
  }
  if (arr[leftIndex] !== arr[rightindex]) {
    return false;
  }
  return true;
}

