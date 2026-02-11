function flattenArray(arr:any[]){
const flatArray:number[]=[]

for(let i=0;i<arr.length;i++){
  const item=arr[i]
  for(let j=0;j<item.length;j++){
    flatArray.push(arr[i][j])
  }

}
  return flatArray;
}

const array=[[1,2],[3,4]]

console.log(flattenArray(array))