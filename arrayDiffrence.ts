function arraysDiffrence(arr:number[],arr2:number[]){

  const resultArray=[]
  for(let i=0;i<arr.length;i++){

    if(arr2.indexOf(arr[i])==-1){
      resultArray.push(arr[i])
    }
  }
  return resultArray

}


const array1=[1,2,3]
const array2 =[3,3]

console.log(arraysDiffrence(array1,array2))