export function multiplyByTwo(arr: number[]) {
  const arr2: number[] = [];

  for (const element of arr) {
    arr2.push(element * 2);
  }
  return arr2;
}
