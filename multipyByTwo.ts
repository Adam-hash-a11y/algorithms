function multiplyByTwo(arr: number[]) {
  const arr2: number[] = [];

  for (const element of arr) {
    arr2.push(element * 2);
  }
  return arr2;
}
const array2 = [1, 2, 3];

console.log(multiplyByTwo(array2));
