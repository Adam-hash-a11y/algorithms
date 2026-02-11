function wordlength(arr:string[]):number[]{

  let wordLengthArray=[]
  for (let i =0; i< arr.length;i++){

    wordLengthArray.push(arr[i].length)
  }
  return wordLengthArray
}

const array = ["cat","elephant"]

console.log(wordlength(array))