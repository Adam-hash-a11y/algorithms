function sortNumberAscending(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(arr);
      }
    }
  }

  return [arr[arr.length - 1], arr[arr.length - 2]];
}

const array = [10, 40, 30, 20];
console.log(sortNumberAscending(array));
