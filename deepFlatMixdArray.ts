export function deepFlatMixedArray(arr: any[], result: number[] = []) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      deepFlatMixedArray(element, result);
    } else {
      result.push(element);
    }
  }
  return result;
}
