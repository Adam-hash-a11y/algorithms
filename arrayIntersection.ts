function arraysIntersection(arr:number[],arr2:number[]){

  const resultArray=[]
  for(let i=0;i<arr.length;i++){

    if(arr2.indexOf(arr[i])!=-1){
      resultArray.push(arr[i])
    }
  }
  return resultArray

}


const array1=[1]
const array2 =[3,4,5,1]

console.log(arraysIntersection(array1,array2))