export function groupByYear(arr: { d: string }[]) {
  const resultObject: { [key: string]: { d: string }[] } = {};

  for (const element of arr) {
    const currentYear = element.d.substring(0, 4);
    if (resultObject[currentYear]) {
      resultObject[currentYear].push(element);
    } else {
      resultObject[currentYear] = [element];
    }
  }
  return resultObject;
}
