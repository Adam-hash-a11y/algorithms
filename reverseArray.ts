function reverseArray(arr: number[]) {
  const reversedArray = [];

  while (arr.length > 0) {
    reversedArray.push(arr.pop());
  }
  return reversedArray;
}

function reverseArrayBackward(arr: number[]) {
  let reversedArray = [];
  for (let i = arr.length-1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

const array = [1, 2, 3, 4];

console.log(reverseArrayBackward(array));

console.log(reverseArray(array));
