export function lastLogin(arr: { l: number }[]): { l: number }[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const temp = arr[j];
      if (arr[j].l < arr[j + 1].l) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
