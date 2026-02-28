export function totaleCartPrice(arr: { p: number; q: number }[]): number {
  let total: number = 0;
  let totalPerObject: number = 1;
  for (const element of arr) {
    for (let key in element) {
      totalPerObject *= element[key as keyof typeof element];
    }
    total += element.p * element.q;
    totalPerObject = 1;
  }
  return total;
}

const array: { p: number; q: number }[] = [];
console.log(totaleCartPrice(array));
