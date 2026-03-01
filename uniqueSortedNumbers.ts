export function uniqueSortedNumbers(arr: number[]): number[] {
  const array2: number[] = [];
  for (const element of arr) {
    if (!array2.includes(element)) {
      array2.push(element);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2.length - 1 - i; j++) {
      if (array2[j] > array2[j + 1]) {
        const temp = array2[j];
        array2[j] = array2[j + 1];
        array2[j + 1] = temp;
      }
    }
  }

  return array2;
}
