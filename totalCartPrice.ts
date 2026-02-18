function totaleCartPrice(arr: { [key: string]: number }[]) {
  let total: number = 0;
  let totalPerObject: number = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      totalPerObject *= arr[i][key];
    }
    total += totalPerObject;
    totalPerObject = 1;
  }
  return total;
}

const array = [
  { p: 10, q: 2 },
  { p: 5, q: 3 },
];
console.log(totaleCartPrice(array));
