export function palindromesOnly(arr: string[]): string[] {
  const resultArray: string[] = [];
  for (const element of arr) {
    const word = element;

    let l = 0;
    let r = word.length - 1;
    let leftMostcharater = word[l];
    let rightmostcharatcher = word[r];
    while (leftMostcharater === rightmostcharatcher && l < r) {
      l++;
      r--;
      leftMostcharater = word[l];
      rightmostcharatcher = word[r];
    }
    if (leftMostcharater === rightmostcharatcher) {
      resultArray.push(word);
    }
  }
  return resultArray;
}
