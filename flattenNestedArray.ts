function flattenArray(arr: any[]) {
  const flatArray: number[] = [];

  let temp: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == undefined) {
      console.log("this is arr[i]", arr[i]);
      flatArray.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        temp.push(arr[i][j]);
        console.log("this is temp", temp);
      }

      console.log(temp.join(""), arr[i].toString());

      if (temp.join("") !== arr[i].toString()) {
        for (let j = 0; j < arr[i].length; j++) {
          console.log("testing values", arr[i][j]);
          flatArray.push(arr[i][j]);
        }
        temp = [];
      } else {
        flatArray.push(arr[i]);
        temp = [];
      }
    }
  }

  return flatArray;
}

const array = [5, 999, [1, 2], [1], "a", 555];

console.log(flattenArray(array));
