function uniqueWords(arr: string[]) {
  const sortedArray: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    let decompressedElment = arr[i].split(" ");
    console.log(decompressedElment);
    for (let j = 0; j < decompressedElment.length; j++) {
      if (sortedArray.indexOf(decompressedElment[j]) == -1)
        sortedArray.push(decompressedElment[j]);
    }
  }

  return sortedArray;
}

const array = ["hello js", "hello world", "hello test", "test"];
console.log(uniqueWords(array));
