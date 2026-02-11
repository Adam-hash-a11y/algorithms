function isAllPostiveNumbers(arr:number[]):boolean{
  let i=0;
  while(i<arr.length){
    console.log(i)
    if(arr[i]<0){
      return false
    }
    i++;
  }
  return true
}


const array = [1,-2,3,5,-8]
console.log(isAllPostiveNumbers(array))