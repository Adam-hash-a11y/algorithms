function chunckByTwo(arr: number[]) {
  const chunckedArray = [];
  let tempArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
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

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(chunckByTwo(array));
