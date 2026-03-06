export function nestedComments(arr: { r: {}[] }[]): number {
  let comments = 0;
  for (const element of arr) {
    comments += element.r.length;
  }
  return comments;
}
