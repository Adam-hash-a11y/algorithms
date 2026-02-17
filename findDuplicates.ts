
function findDuplicates (arr:number[]) :number[]{

const  arrayOfDuplicates: number[]= []

for(let i=0;i<arr.length;i++){

  let item = arr[i]

 if(arr.indexOf(item)!== i){
  arrayOfDuplicates.push(item)
 }
}

  return arrayOfDuplicates
}


const array = [1,2,2,3,3]
console.log(findDuplicates(array))