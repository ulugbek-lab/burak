//MIT TASK P
//1)// function objectToArray(keys: any) {
//   let nest = [];
//   for (const key in keys) {
//     nest.push([key, keys[key]]);
//   }
//   return nest;
// }
// console.log(objectToArray({ a: 10, b: 20 }));

//2)
function objectToArray(keys: any) {
  return Object.entries(keys);
}

console.log(objectToArray({ a: 10, b: 20 }));




//MIT TASK O
// function calculate(values: any) {
//   let sum: any = 0;
//   for (let value of values) {
//     if (typeof value === "number") {
//       sum += value;
//     }
//   }
//   return sum;
// }
// console.log(calculate([10, "10", { son: 10 }, true, 35]));

//MIT TASK N
// function palindrom(value: string): boolean {
//   return value.split("").join("") === value.split("").reverse().join("");
// }
// console.log(palindrom("dad"));

//MIT TASK M
// function getSquareNumbers(values: number[]) {
//   return values.map((value: number) => {
//     return {
//       number: value,
//       square: value * value,
//     };
//   });
// }
// console.log(getSquareNumbers([1, 2, 3]));

// function getSquareNumbers(values: number[]) {
//   const result = [];
//   for (const value of values) {
//     result.push({
//       number: value,
//       square: value * value,
//     });
//   }
//   return result;
// }
// console.log(getSquareNumbers([1, 2, 3]));
//MIT TASK L

// function reversevalue(values: string) {
//   return values
//     .split(" ")
//     .map((word: string) => {
//       return word.split("").reverse().join("");
//     })
//     .join(" ");
// }
// console.log(reversevalue("we like coding"));
