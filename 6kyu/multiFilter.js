/* Write a function called multiFilter which receives a variable number of filter functions. The function should return a function that receives one element (a compound filter function).

That is, if we have two functions:

function isEven(el){
  return el % 2 === 0;
}
and

function isGTten(el){
  return el > 10;
}
then

[1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten));
should return [12,20,22]

Additional Rules
multiFilter can't be implemented using loops like:

for
while
do while
WARNING: Using ES6 features may break these rules because Babel can introduce some for loops when transpiling your code. Please, open an issue if it happens. */

const multiFilter =
  (...filters) =>
  (item) =>
    filters.map((filter) => filter(item)).every((item) => item);

var isOdd = function (el) {
  return el % 2 === 1;
};

var isEven = function (el) {
  return el % 2 === 0;
};

testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
result = testArray.filter(multiFilter(isEven, isOdd));

console.log(result);
