export function truthyValues(arr: any[]): number {
  let truthyValues: number = 0;
  for (const element of arr) {
    if (
      element !== false &&
      element !== "" &&
      element !== 0 &&
      element !== undefined
    ) {
      truthyValues += 1;
    }
  }
  return truthyValues;
}
