export function chunkByThree(arr: number[]): number[][] {
  const resultArray: number[][] = [];
  let i = 0;
  while (i < arr.length) {
    const tempArray: number[] = [];
    for (let j = i; j < i + 3 && j < arr.length; j++) {
      tempArray.push(arr[j]);
    }
    resultArray.push(tempArray);
    i += 3;
  }
  return resultArray;
}

