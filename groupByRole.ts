function groupByRole(arr: { [key: string]: string }[]) {
  const mappedElements: { [key: string]: {}[] } = { [arr[0].role]: [arr[0]] };
  for (let i = 1; i < arr.length; i++) {
    if (mappedElements[arr[i].role]) {
      mappedElements[arr[i].role].push(arr[i]);
    } else {
      mappedElements[arr[i].role] = [arr[i]];
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
console.log(groupByRole(array));
