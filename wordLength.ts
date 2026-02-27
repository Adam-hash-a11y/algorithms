export function wordlength(arr: string[]): number[] {
  let wordLengthArray: number[] = [];
  for (const element of arr) {
    wordLengthArray.push(element.length);
  }
  return wordLengthArray;
}

const array = ["cat", "elephant"];


