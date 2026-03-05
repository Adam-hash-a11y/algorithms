export function tagCloud(arr: string[]): { [key: string]: number } {
  const resultObject: { [key: string]: number } = {};

  for (const element of arr) {
    const currentWord = element;
    if (resultObject[currentWord]) {
      resultObject[currentWord] += 1;
    } else {
      resultObject[currentWord] = 1;
    }
  }
  return resultObject;
}
