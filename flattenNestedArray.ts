export function flattenArray(arr: (number | number[])[]): number[] {
  const flatArray: number[] = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const item of element) {
        flatArray.push(item);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
}
