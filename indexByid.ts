export function indexByid(arr: { id: number }[]): {
  [key: string]: { id: number };
} {
  const resultObj: { [key: string]: { id: number } } = {};
  for (const element of arr) {
    resultObj[element.id] = element;
  }
  return resultObj;
}
