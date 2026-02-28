export function flattenAllItems(arr: { items: number[] }[]): number[] {
  const flattedArray: number[] = [];

  for (const element of arr) {
    let item = element;
    console.log(item);
    for (const element of item.items) {
      flattedArray.push(element);
    }
  }
  return flattedArray;
}
