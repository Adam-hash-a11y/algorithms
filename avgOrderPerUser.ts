export function avgOrderUser(arr: { o: number[] }[]): number[] {
  const resultArray = [];
  for (const _ of arr) {
    let sum = 0;
    for (const element of _.o) {
      sum += element;
    }
    const avg = sum / _.o.length;
    resultArray.push(avg);
  }
  return resultArray;
}
