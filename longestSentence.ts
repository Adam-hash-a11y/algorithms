export function longestSentence(arr: string[]): string {
  let longestWord = arr[0];
  for (const element of arr) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
}


