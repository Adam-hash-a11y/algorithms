function wordGroups(arr: string[]) {
  let groupedWords: { [key: string]: string[] } = {};
  for (let i = 0; i < arr.length; i++) {
    let firstLetterOfelement = arr[i][0];
    if (groupedWords[firstLetterOfelement]) {
      groupedWords[firstLetterOfelement].push(arr[i]);
    } else {
      groupedWords[firstLetterOfelement] = [arr[i]];
    }
  }
  return groupedWords;
}

const array = ["apple", "car", "apricot", "banana", "balha"];
console.log(wordGroups(array));
