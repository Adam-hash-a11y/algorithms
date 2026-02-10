function removeDuplicates(arr:number[]):number[]{
const array2:number[]=[]
  for(let i=0; i<arr.length;i++){

    if(array2.indexOf(arr[i]) == -1){

      array2.push(arr[i])
    }

  }
return array2

}


const array=[1,2,2,3,3,2,5,5]


console.log(removeDuplicates(array))