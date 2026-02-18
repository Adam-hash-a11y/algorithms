function sumPerCumstomer(arr: { c: string; a: number }[]) {
  let resultObj: { [key: string]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    console.log(item.c);
    if (resultObj[item.c]) {
      resultObj[item.c] += item.a;
    } else {
      resultObj[item.c] = item.a;
    }
  }
  return resultObj;
}

let array = [
  { c: "A", a: 10 },
  { c: "A", a: 5 },
  { c: "B", a: 20 },
  { c: "B", a: 10 },
];
console.log(sumPerCumstomer(array));
