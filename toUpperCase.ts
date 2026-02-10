function makeUpperCase(arr: string[]): string[] {
  const arrayUppercase: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    arrayUppercase.push(arr[i].toUpperCase());
  }
  return arrayUppercase;
}

const array: string[] = ["adam", "hamdi"];
console.log(makeUpperCase(array));
