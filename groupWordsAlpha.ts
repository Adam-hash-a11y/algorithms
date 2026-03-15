export function groupWords(arr: string[]): string[] {
  const resArray = [...arr];
  for (let i = 0; i < resArray.length - 1; i++) {
    for (let j = 0; j < resArray.length - 1 - i; j++) {
      if (resArray[j]?.charCodeAt(0) > resArray[j + 1].charCodeAt(0)) {
        const temp = resArray[j];
        resArray[j] = resArray[j + 1];
        resArray[j + 1] = temp;
      }
    }
  }
  return resArray;
}
