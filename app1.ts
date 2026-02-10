function biggerThanTen(a: number) {
  return a > 10 ? true : false;
}

const array = [5, 12, 8, 20];

console.log(array.filter(biggerThanTen));
