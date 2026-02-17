function checkArraySameValues(arr: number[], arr2: number[]) {
  if (arr.length != arr2.length) {
    return false;
  } else {
    let i: number = 0;

    while (i < arr.length && arr2.indexOf(arr[i]) != -1) {
      i++;
    }
    if (i < arr.length && arr2.indexOf(arr[i]) == -1) {
      console.log(arr[i]);
      return false;
    }
  }
  return true;
}

const array1 = [4, 1, 2, 5];
const array2 = [3, 2, 1, 4];

console.log(checkArraySameValues(array1, array2));
