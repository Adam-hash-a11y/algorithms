export function normalizeEmails(arr: string[]): string[] {
  const resultArray: string[] = [];
  for (const element of arr) {
    const currentEmail = element.toLowerCase();
    resultArray.push(currentEmail.replaceAll(" ", ""));
  }
  return resultArray;
}
