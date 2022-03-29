"use strict";
/*
You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
*/

function calculate(...a) {
  let sum1 = a.reduce((acc, item) => acc + item, 0);

  return function calculateSecondParam(...b) {
    let sum2 = b.reduce((acc, item) => acc + item, 0);

    console.log(sum1 + sum2);
    return sum1 + sum2;
  };
}

calculate(1)(1); // should return 2
calculate(1, 1)(1); // should return 3
calculate(1, 1)(1, -1); // should return 2
calculate(2, 4)(3, 7, 1); // should return 17
