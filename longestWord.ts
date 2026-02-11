function longestWordInArray(arr: string[]): string {
  let longestString: string = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}

const array: string[] = ["car", "motorcycle", "bike"];

console.log(longestWordInArray(array));
