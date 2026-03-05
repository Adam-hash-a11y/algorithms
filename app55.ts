export function deepFlat(
  arr: (number | (number | number[])[])[],
  result: number[] = [],
) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      deepFlat(element, result);
    } else {
      result.push(element);
    }
  }
  return result;
}
