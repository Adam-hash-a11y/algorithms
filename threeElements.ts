export function threeElements(arr: number[]): number[] {
  const threeElements = [];
  for (let i = 0; i < 3; i++) {
    threeElements.push(arr[i]);
  }
  return threeElements;
}
