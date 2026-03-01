export function sumPerCumstomer(arr: { c: string; a: number }[]): {
  [key: string]: number;
} {
  let resultObj: { [key: string]: number } = {};
  for (const element of arr) {
    const item = element;
    if (resultObj[item.c]) {
      resultObj[item.c] += item.a;
    } else {
      resultObj[item.c] = item.a;
    }
  }
  return resultObj;
}
