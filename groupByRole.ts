export function groupByRole(arr: { role: string }[]): {
  [key: string]: { role: string }[];
} {
  const mappedElements: { [key: string]: { role: string }[] } = {};
  for (const element of arr) {
    if (mappedElements[element.role]) {
      mappedElements[element.role].push(element);
    } else {
      mappedElements[element.role] = [element];
    }
  }
  return mappedElements;
}

const array = [
  { role: "a" },
  { role: "b" },
  { role: "a" },
  { role: "a" },
  { role: "a" },
  { role: "b" },
];
console.log(array);
console.log(groupByRole(array));
