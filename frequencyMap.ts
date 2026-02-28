export function frequencyMap(arr: number[]): { [x: number]: number } {
  const mappedArray: { [x: number]: number } = {};

  for (const element of arr) {
    let item = element;
    if (mappedArray[item]) {
      mappedArray[item] += 1;
    } else {
      mappedArray[item] = 1;
    }
  }

  return mappedArray;
}
