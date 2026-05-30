//MIT TASK N
function palindrom(value: string): boolean {
  return value.split("").join("") === value.split("").reverse().join("");
}
console.log(palindrom("dad"));

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
