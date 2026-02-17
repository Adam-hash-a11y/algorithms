function historgramRange(arr: number[]) {
  let sortedHistrogram: { [key: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    let range_start = Math.floor(arr[i] / 10) * 10;
    let range_end = range_start + 9;
    console.log(arr[i], range_start, range_end);
    let key: string = range_start + "-" + range_end;
    console.log(key);
    if (sortedHistrogram[key] == undefined) {
      sortedHistrogram[key] = 1;
    } else {
      sortedHistrogram[key] += 1;
    }
  }
  return sortedHistrogram;
}

const array = [-2, -5, 9, 10, 12, 50, 33, 5, 1000];

console.log(historgramRange(array));
