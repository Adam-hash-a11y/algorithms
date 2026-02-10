function multiplyByTwo(arr: number[]) {
  const arr2: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
  }
  return arr2;
}
const array = [1, 2, 3];

console.log(multiplyByTwo(array));
