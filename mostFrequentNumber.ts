function mostFrequent(arr: number[]): number | undefined {
  const mappedobj: { [key: number]: number } = { [arr[0]]: 1 };

  for (let i = 0; i < arr.length; i++) {
    if (mappedobj[arr[i]]) {
      mappedobj[arr[i]] += 1;
    } else {
      mappedobj[arr[i]] = 1;
    }
  }
  let max: number = 0;
  let mostFeq: number = 0;

  console.log(mappedobj);

  for (const key in mappedobj) {
    if (mappedobj[key] > max) {
      max = mappedobj[key];
      mostFeq = Number(key);
    }
  }
  return mostFeq;
}

const array = [1, 2, 3, 3, 2, 2, 2];

console.log(array);

console.log(mostFrequent(array));
