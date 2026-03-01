export function removeEmptyObject(arr: {}[]): { [key: string]: number }[] {
  const cleanArray = [];
  let isEmpty: boolean = true;
  for (const element of arr) {
    for (let _ in element) {
      isEmpty = false;
    }
    if (!isEmpty) {
      cleanArray.push(element);
      isEmpty = true;
    }
  }
  return cleanArray;
}
