function hasFive(arr:number[]):boolean{
  let i=0 ;

  while(i<arr.length && arr[i] !=5 ){
    console.log(i)
    i++;
  }

  if(arr[i]==5){
    return true
  }
  else{return false}

}


let array=[1,2,3,5,6]

console.log(hasFive(array))