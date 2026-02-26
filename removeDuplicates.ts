export function removeDuplicates(arr: number[]): number[] {
  const array2: number[] = [];
  for (const element of arr) {
    if (!array2.includes(element)) {
      array2.push(element);
    }
  }
  return array2;
}
