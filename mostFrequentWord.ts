export function mostFrequentWord(arr: string[]): string {
  const resObj: { [key: string]: number } = {};
  for (const element of arr) {
    if (resObj[element]) {
      resObj[element] += 1;
    } else {
      resObj[element] = 1;
    }
  }

  let max = 0;
  let mostFeq = "";
  for (const key in resObj) {
    if (resObj[key] > max) {
      max = resObj[key];
      mostFeq = String(key);
    }
  }
  return mostFeq;
}
