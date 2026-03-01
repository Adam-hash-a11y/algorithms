export function uniqueWords(arr: string[]): string[] {
  const sortedArray: string[] = [];
  for (const element of arr) {
    const decompressedElment = element.split(" ");
    console.log(decompressedElment);
    for (const element of decompressedElment) {
      if (!sortedArray.includes(element)) sortedArray.push(element);
    }
  }

  return sortedArray;
}
