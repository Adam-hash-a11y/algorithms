export function historgramRange(arr: number[]): { [key: string]: number } {
  const sortedHistrogram: { [key: string]: number } = {};

  for (const element of arr) {
    let range_start = Math.floor(element / 10) * 10;
    let range_end = range_start + 9;
    let key: string = range_start + "-" + range_end;
    if (sortedHistrogram[key] == undefined) {
      sortedHistrogram[key] = 1;
    } else {
      sortedHistrogram[key] += 1;
    }
  }
  return sortedHistrogram;
}
