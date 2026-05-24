//MIT TASK L

function reversevalue(values: string) {
  return values
    .split(" ")
    .map((word: string) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
console.log(reversevalue("we like coding"));
