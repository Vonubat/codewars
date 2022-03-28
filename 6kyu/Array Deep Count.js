"use strict";

/*
Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);
//>>>>> 3
deepCount(["x", "y", ["z"]]);
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);
//>>>>> 7
The input will always be an array.
*/

function deepCount(a) {
  let count = 0;

  function recursion(arr) {
    count += arr.length;
    for (let item of arr) {
      if (Array.isArray(item)) {
        recursion(item);
      }
    }
  }
  recursion(a);
  return count;
}

console.log(deepCount([])); //0
console.log(deepCount([1, 2, 3])); //3
console.log(deepCount(["x", "y", ["z"]])); //4
console.log(deepCount([1, 2, [3, 4, [5]]])); //7
console.log(deepCount([[[[[[[[[]]]]]]]]])); //8
console.log(deepCount([28, 13, [[[[16, 24, [[]]]], 10, 20]]])); //12
