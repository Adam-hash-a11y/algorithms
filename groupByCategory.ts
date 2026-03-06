export function groupByCategory(arr: { c: string }[]): {
  [key: string]: { c: string }[];
} {
  const resultObj: {
    [key: string]: { c: string }[];
  } = {};

  for (const element of arr) {
    if (resultObj[element.c]) {
      resultObj[element.c].push(element);
    } else {
      resultObj[element.c] = [element];
    }
  }
  return resultObj;
}
