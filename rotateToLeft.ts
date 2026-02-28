export function rotateLeft(arr: number[]): number[] {
  const result: number[] = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    let temp = result[i];
    result[i] = result[i + 1];
    result[i + 1] = temp;
  }
  return result;
}
