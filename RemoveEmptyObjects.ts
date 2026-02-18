function removeEmptyObject(arr: {}[]) {
  let cleanArray = [];
  let isEmpty: boolean = true;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    for (let key in arr[i]) {
      console.log(key, "this is key");
      isEmpty = false;
    }
    if (isEmpty == false) {
      cleanArray.push(arr[i]);
      isEmpty = true;
    }
  }
  return cleanArray;
}

const array = [{}, { a: 1, b: 2 }, {}, {}];
console.log(removeEmptyObject(array));
