export function makeUpperCase(arr: string[]): string[] {
  const arrayUppercase: string[] = [];

  for (const element of arr) {
    arrayUppercase.push(element.toUpperCase());
  }
  return arrayUppercase;
}

const array: string[] = ["adam", "hamdi"];
console.log(makeUpperCase(array));
