export function mostFrequent(arr: number[]): number {
  const mappedobj: { [key: number]: number } = {};

  for (const element of arr) {
    if (mappedobj[element]) {
      mappedobj[element] += 1;
    } else {
      mappedobj[element] = 1;
    }
  }
  let max: number = 0;
  let mostFeq: number = 0;

  for (const key in mappedobj) {
    if (mappedobj[key] > max) {
      max = mappedobj[key];
      mostFeq = Number(key);
    }
  }
  return mostFeq;
}
