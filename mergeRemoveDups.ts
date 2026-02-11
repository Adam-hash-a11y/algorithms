function mergeArrays(arr: number[], arr2: number[]) {
  return arr.concat(arr2);
}

function removeDups(arr: number[]) {
  const cleanArray: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (cleanArray.indexOf(arr[i]) == -1) {
      cleanArray.push(arr[i]);
    }
  }
  return cleanArray;
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

const result = mergeArrays(array1, array2);
console.log(result);
console.log(removeDups(result));
