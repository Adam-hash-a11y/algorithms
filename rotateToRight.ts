export function rotateToright(arr: number[]): number[] {
  const resArray = [...arr];
  for (let i = resArray.length - 1; i > 0; i--) {
    const temp = resArray[i];
    resArray[i] = resArray[i - 1];
    resArray[i - 1] = temp;
  }
  return resArray;
}
