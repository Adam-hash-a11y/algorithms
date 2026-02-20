function sortUserByOrderCount(arr: { o: number[] }[]) {
  const tempArray: { userName: string; count: number }[] = [];
  const finalArray: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const userName = "user" + String.fromCodePoint(65 + i);
    const count = arr[i].o.length;
    tempArray.push({ userName, count });
  }

  for (let i = 0; i < tempArray.length - 1; i++) {
    for (let j = 0; j < tempArray.length - 1 - i; j++) {
      if (tempArray[j].count < tempArray[j + 1].count) {
        const temp = tempArray[j];
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

const array = [{ o: [1, 2] }, { o: [1] }, { o: [1, 2, 5, 6] }];

console.log(sortUserByOrderCount(array));
