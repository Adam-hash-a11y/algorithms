function isFalsy(a: any): boolean {
  if (a == "" || a == null || a == 0 || a == false || a == undefined) {
    return false;
  } else {
    return true;
  }
}

const array = [0, 1, false, 2, null, undefined];

console.log(array.filter(isFalsy));
