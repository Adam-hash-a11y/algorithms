function flattenAllItems(arr: { items: any[] }[]): any[] {
  const flattedArray: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    console.log(item);
    for (let j = 0; j < item.items.length; j++) {
      flattedArray.push(item.items[j]);
    }
  }
  return flattedArray;
}
const array = [{ items: [1, 2] }, { items: [2] }, { items: [3, "aa"] }];
console.log(flattenAllItems(array));
