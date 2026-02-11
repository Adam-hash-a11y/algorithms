function rotateLeft(arr: number[]) {
  let temp = arr.shift()!;
  arr.push(temp);

  return arr;
}

function rotateLeftVanilla(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

const array = [1, 2, 3, 4];

const array2 = [11, 12, 13, 14];
console.log("initial array", array, "\n Rotated Array");
console.log(rotateLeft(array));
console.log("initial array", array2, "\n Rotated Array Vanilla");
console.log(rotateLeftVanilla(array2));
