function largestNumber(arr:number[]):number{

let max=0
for (let i=0;i<arr.length;i++){
  if(arr[i]>max){
    max=arr[i]
  }
}
return max

}

const array =[3,10,7]
console.log(largestNumber(array))