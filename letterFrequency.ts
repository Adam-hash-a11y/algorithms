function letterFrquency(arr: string[]) {
  const frequencyCount: { [key: string]: number } = { [arr[0]]: 1 };

  for (let i = 1; i < arr.length; i++) {
    if (frequencyCount[arr[i]]) {
      frequencyCount[arr[i]] += 1;
    } else {
      frequencyCount[arr[i]] = 1;
    }
  }
  return frequencyCount
}

const array = ["a", "b", "a"];

console.log(letterFrquency(array))
