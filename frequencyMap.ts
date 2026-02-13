function frequencyMap(arr: any[]) {
  const mappedArray: { [x: number]: number } = { [arr[0]]: 1 };

  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    if (mappedArray[item]) {
      mappedArray[item] += 1;
    } else {
      mappedArray[item] = 1;
    }
  }

  return mappedArray;
}

const array = [1, 2, 3, 3, 3, 2];
console.log(frequencyMap(array));
