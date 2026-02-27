export function chunckByTwo(arr: number[]): number[][] {
  const chunckedArray: number[][] = [];
  let tempArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    tempArray.push(arr[i]);
    if (i % 2 !== 0) {
      chunckedArray.push(tempArray);
      tempArray = [];
    } else if (i == arr.length - 1 && i % 2 == 0) {
      chunckedArray.push(tempArray);
    }
  }
  return chunckedArray;
}

