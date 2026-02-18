function sortObjectsByAge(arr: { age: number }[]) {
  let temp: { age: number };
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].age > arr[j + 1].age) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let array = [{ age: 30 }, { age: 50 }, { age: 90 }, { age: 10 }];

console.log(sortObjectsByAge(array));
