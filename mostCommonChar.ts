export function mostCommonChar(str: string): string {
  let commonChar: string = "";
  const resultobj: { [key: string]: number } = {};

  for (const element of str) {
    if (resultobj[element]) {
      resultobj[element] += 1;
    } else {
      resultobj[element] = 1;
    }
  }

  let mostFrequentCharlength = 0;
  for (const key in resultobj) {
    if (resultobj[key] > mostFrequentCharlength) {
      mostFrequentCharlength = resultobj[key];
      commonChar = key;
    }
  }

  return commonChar;
}
