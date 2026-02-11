function isLessThanFifty(a:number):boolean{

  return a<50? true : false
}

const array= [10,60,40,80]

console.log(array.filter(isLessThanFifty))