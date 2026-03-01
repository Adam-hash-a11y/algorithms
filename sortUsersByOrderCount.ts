export function sortUserByOrderCount(arr: { o: number[] }[]): string[] {
  const tempArray: { userName: string; count: number }[] = [];
  const finalArray: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    let userName = "user" + String.fromCodePoint(65 + i);
    let count = arr[i].o.length;
    tempArray.push({ userName, count });
  }

  for (const _ of tempArray) {
    for (let j = 0; j < tempArray.length - 1; j++) {
      if (tempArray[j].count < tempArray[j + 1].count) {
        let temp: { userName: string; count: number } = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = temp;
      }
    }
  }
  for (const element of tempArray) {
    finalArray.push(element.userName);
  }
  return finalArray;
}
