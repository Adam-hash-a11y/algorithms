export function highestSpent(arr: { n: string; s: number }[]): {
  n: string;
  s: number;
} {
  let highestSpendingCustomer: { n: string; s: number } = { ...arr[0] };

  for (const element of arr) {
    const currentElement = element;
    if (currentElement.s > highestSpendingCustomer.s) {
      highestSpendingCustomer = currentElement;
    }
  }
  return highestSpendingCustomer;
}
