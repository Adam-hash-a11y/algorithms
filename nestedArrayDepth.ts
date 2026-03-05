export function nestedArrayDepth(arr: any[], arrayDepth = 0) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      return nestedArrayDepth(element, arrayDepth + 1);
    }
  }
  return arrayDepth;
}
