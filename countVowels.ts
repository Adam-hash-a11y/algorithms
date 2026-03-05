export function countVowelsPerWord(arr: string[]): number[] {
  const resultArray: number[] = [];
  for (const element of arr) {
    const word = element.toUpperCase();
    let count = 0;
    for (const element of word) {
      if (
        element == "A" ||
        element == "E" ||
        element == "I" ||
        element == "O" ||
        element == "U"
      ) {
        count += 1;
      }
    }
    resultArray.push(count);
  }
  return resultArray;
}
