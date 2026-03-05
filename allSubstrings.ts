export function allSubstrings(str: string): string[] {
  const resultarray = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
      resultarray.push(str.substring(j, i + 1));
    }
  }
  return resultarray;
}
