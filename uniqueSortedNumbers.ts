function uniqueSortedNumbers(arr: number[]): number[] {
  const array2: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (array2.indexOf(arr[i]) == -1) {
      array2.push(arr[i]);
    }
  }
  let temp = 0;
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] > array2[j + 1]) {
        temp = array2[j];
        array2[j] = array2[j + 1];
        array2[j + 1] = temp;
      }
    }
  }

  return array2;
}

const array = [9, 1, 2, 2, 3, 3, 2, 5, 5];

console.log(uniqueSortedNumbers(array));
