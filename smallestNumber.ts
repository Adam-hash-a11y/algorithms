function smallestNumber(arr: number[]): number {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let array=[3,1,10,7]

console.log(smallestNumber(array))