"use strict";
/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

function getLengthOfMissingArray(arrayOfArrays) {
  let arr = [];
  if (arrayOfArrays === null) {
    return 0;
  }

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (
      arrayOfArrays === null ||
      arrayOfArrays[i] === null ||
      arrayOfArrays[i].length === 0
    ) {
      return 0;
    }
    arr.push(arrayOfArrays[i].length);
  }

  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] == 2) return arr[i] - 1;
  }

  return 0;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);

console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);

console.log(getLengthOfMissingArray([[null], [null, null, null]]));

console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ])
);

console.log(
  getLengthOfMissingArray([
    [],
    [0, 0],
    [3, 0, 2],
    [1, 1, 1, 3],
    [4, 2, 1, 2, 3],
  ])
);

console.log(
  getLengthOfMissingArray([
    [4],
    [],
    [0, 4],
    [0, 4, 4, 1],
    [3, 1, 2, 4, 2],
    [0, 1, 2],
    [1, 0, 2, 2, 2, 3],
    [4, 0, 0, 2, 1, 0, 2, 0, 0],
    [0, 3, 1, 4, 4, 3, 0, 0],
    [1, 4, 3, 0, 2, 4, 3, 0, 3, 2],
  ])
);
