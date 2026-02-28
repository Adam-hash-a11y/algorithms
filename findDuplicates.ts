export function findDuplicates(arr: number[]): number[] {
  const arrayOfDuplicates: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (arr.indexOf(item) !== i) {
      arrayOfDuplicates.push(item);
    }
  }
  return arrayOfDuplicates;
}
