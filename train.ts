//MIT TASK S
function missingNumber(values: any) {
  for (let i = 0; i <= values.length; i++) {
    if (!values.includes(i)) {
      return i;
    }
  }
}

console.log(missingNumber([3, 0, 1]));

// <MIT TASK R
// function calculate(values: any): any {
//   return eval(values)

// }
// console.log(calculate("6 + 4"));

// function calculate(values: any): any {
//   const [a, b, c] = values.split(" ");
//   if (b === "+") {
//     return Number(a) + Number(c);
//   }
// }
// console.log(calculate("6 + 4"));
//MIT TASK Q

// function hasProperty(values: any, keys: string): any {
//   for (const key in values) {
//     if (key === keys) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(hasProperty({ age: "BMW", year: "BMW" }, "name"));

// function hasProperty(values: any, keys: string): any {
//   return keys in values
// }
// console.log(hasProperty({ age: "BMW", name: "BMW" }, "name"));

// function hasProperty(values: any, keys: string): boolean {
//   return values.hasOwnProperty(keys);
// }
// console.log(hasProperty({ age: "BMW", year: "BMW" }, "name"));

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
// function objectToArray(keys: any) {
//   return Object.entries(keys);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

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

// Architectural pattern: MVC, Dependency Injection, MVP
//MVC = model view controller
//Design pattern: Middleware, Decorator

// CLUSTER => Database => Collection => Document

/* Project Standards:
 - logging standards 
 - naming stardards 
    functions, methods, variables => Camel     
   class => PASCAL                       
    folder => KEBAB
    css => SNAKE 


#  -ERROR handling  
# */

/*
# (traditional)APi
# RestApi
# GraphQL APi 
# */

/*
 Traditional Frontend Development => BSSR (Admin) => EJS

 Modern frontend Development   =>  SPA(User) => REACT 

*/

/**COOKIES
 * 
 request join
 self destroy

 */
