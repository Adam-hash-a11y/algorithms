function isPositive(a:number):boolean{

  return a>0?  true : false;
}


const array = [5,-9,-10,11]


console.log(array.filter(isPositive))