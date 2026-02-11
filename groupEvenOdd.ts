function groupEvenOdd(arr: number[]) {
  const result: { even: number[]; odd: number[] } = { even: [], odd: [] };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.even.push(arr[i]);
    } else {
      result.odd.push(arr[i]);
    }
  }
  return result;
}

function isEven(a: number) {
  return a % 2 == 0;
}
function isOdd(a: number) {
  return a % 2 != 0;
}

const array = [1, 2, 3, 4, 5, 6, 7];

const result: { even: number[]; odd: number[] } = {
  even: array.filter(isEven),
  odd: array.filter(isOdd),
};

console.log(result);

console.log(groupEvenOdd(array));
