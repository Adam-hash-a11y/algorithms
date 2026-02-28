export function isFalsy(a: any): boolean {
  if (a == "" || a == null || a == 0 || !a || a == undefined) {
    return false;
  } else {
    return true;
  }
}
