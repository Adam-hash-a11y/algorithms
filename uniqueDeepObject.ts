export function uniqueDeepObjects(arr: { a: number }[]): { a: number }[] {
  const resultArray: { a: number }[] = [];
  for (const element of arr) {
    const currentElement = element;
    let isDuplicate = false;

    for (const element of resultArray) {
      if (element.a === currentElement.a) {
        isDuplicate = true;
      }
    }

    if (!isDuplicate) {
      resultArray.push(currentElement);
    }
  }
  return resultArray;
}

