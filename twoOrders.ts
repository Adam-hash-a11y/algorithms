export function twoOrders(arr: { o: number[] }[]): { o: number[] }[] {
const resultArray: { o: number[] }[] = [];
for (const element of arr) {
const order = element;
if (order.o.length >= 2) {
resultArray.push(order);
}
}
return resultArray;
}