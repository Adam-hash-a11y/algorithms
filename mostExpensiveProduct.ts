export function mostExpensive(arr: { p: number }[]): { p: number } {
  let mostExp = arr[0];
  for (const element of arr) {
    if (element.p > mostExp.p) {
      mostExp = element;
    }
  }
  return mostExp;
}
