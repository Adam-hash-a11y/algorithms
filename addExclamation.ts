function addExclamationToString(arr: string[]): string[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += "!";
  }
  return arr;
}

function addExclamationToStringConcat(arr: string[]): string[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].concat("!");
  }
  return arr;
}

const array = ["hi", "hello"];
const array2 = ["hello", "hi"];
console.log(addExclamationToStringConcat(array));
console.log(addExclamationToString(array2));
