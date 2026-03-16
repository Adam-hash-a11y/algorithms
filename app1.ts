function mostFrequent(arr: number[]) {
  const resultObj: { [key: string]: number } = {};
  for (const element of arr) {
    if (resultObj[element]) {
      resultObj[element] += 1;
    } else {
      resultObj[element] = 1;
    }
  }
  let mostfq = 0;
  let mostfqValue = "";
  for (const [key, value] of Object.entries(resultObj)) {
    if (value > mostfq) {
      mostfq = value;
      mostfqValue = key;
    }
  }
  return mostfqValue;
}

const arr11 = [1, 2, 2, 3, 3, 3];
console.log(mostFrequent(arr11))
