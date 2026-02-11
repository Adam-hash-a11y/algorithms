function reverseArray(arr: number[]) {
  const reversedArray = [];

  for (let i = 0; i < arr.length; i++) {
    reversedArray.push(arr.pop());
  }

  return reversedArray;
}

const array = [1, 2, 3, 4];

console.log(reverseArray(array));
