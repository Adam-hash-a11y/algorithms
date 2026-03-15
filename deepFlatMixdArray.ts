type flatArray = number | (number | (number | number[])[])[];
export function deepFlatMixedArray(arr: flatArray[], result: number[] = []) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      deepFlatMixedArray(element, result);
    } else {
      result.push(element);
    }
  }
  return result;
}
