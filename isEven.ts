function isEven(a: number) {
  return a % 2 == 0 ? true : false;
}

const randomArray = [1, 2, 3, 4, 5, 6];

console.log(randomArray.filter(isEven));
