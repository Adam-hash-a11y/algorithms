export function wordGroups(arr: string[]): { [key: string]: string[] } {
  let groupedWords: { [key: string]: string[] } = {};
  for (const element of arr) {
    let firstLetterOfelement = element[0];
    if (groupedWords[firstLetterOfelement]) {
      groupedWords[firstLetterOfelement].push(element);
    } else {
      groupedWords[firstLetterOfelement] = [element];
    }
  }
  return groupedWords;
}
