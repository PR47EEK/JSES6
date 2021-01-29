var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const result = numbers.map((x) => x * 2);
console.log(result);

//Filter - Create a new array by keeping the items that return true.

const result1 = numbers.filter((x) => x < 10);
console.log(result1);

//Reduce - Accumulate a value by doing something to each item in an array.
const result2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(result2);

//Find - find the first item that matches from an array.

const result3 = numbers.find((x) => x > 10);
console.log(result3);

//FindIndex - find the index of the first item that matches.

const result4 = numbers.findIndex((x) => x > 10);
console.log(result4);
