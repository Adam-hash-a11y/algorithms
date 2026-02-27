export function threeElements(arr: number[]): number[] {
  const threeElements = [];
  for (let i = 0; i < 3; i++) {
    threeElements.push(arr[i]);
  }
  return threeElements;
}

const array = [5, 6, 7, 8, 9];

console.log(threeElements(array));
