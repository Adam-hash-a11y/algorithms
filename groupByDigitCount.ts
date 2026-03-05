export function groupByDigitCount(arr: number[]): { [key: string]: number[] } {
  const resultObject: { [key: string]: number[] } = {};

  for (const element of arr) {
    const currentElement = element.toString();
    const currentElementLength = currentElement.length;
    if (resultObject[currentElementLength]) {
      resultObject[currentElementLength].push(element);
    } else {
      resultObject[currentElementLength] = [element];
    }
  }
  return resultObject;
}
