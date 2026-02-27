export function groupEvenOdd(arr: number[]): { even: number[]; odd: number[] } {
  const result: { even: number[]; odd: number[] } = { even: [], odd: [] };

  for (const element of arr) {
    if (element % 2 == 0) {
      result.even.push(element);
    } else {
      result.odd.push(element);
    }
  }
  return result;
}
