export function longestWordInArray(arr: string[]): string {
  let longestString: string = "";
  for (const element of arr) {
    if (element.length > longestString.length) {
      longestString = element;
    }
  }
  return longestString;
}
