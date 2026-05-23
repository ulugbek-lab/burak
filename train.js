//MIT TASK L

function reversevalue(values) {
  return values
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
console.log(reversevalue("we like coding"));
