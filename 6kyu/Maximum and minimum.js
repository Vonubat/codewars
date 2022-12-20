'use strict';
/* DESCRIPTION:
Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

Example
max(1,2,3,4) //returns 4
max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
max(1,2,[3,4]) //returns 4
max(1,2,[3,[4]]) //returns 4
max(1,2,[3,['4r']]) //returns NaN
max([[],[-4]]) // returns -4
max() or max([]) //returns 0
And so goes for min

Further Instructions
functions will take any number of arguments
Arrays of numbers can be to any depth
You can't use Math.max, Math.min, and require
If one of the arguments can not be evaluated to a number, return NaN */

const MAX = 'max';
const MIN = 'min';

const compareArgs = (args, option) => {
  const input = args.flat(Infinity).map((item) => Number(item));

  if (input.includes(NaN)) {
    return NaN;
  }

  if (!input.length) {
    return 0;
  }

  if (option === MAX) {
    return input.sort((a, b) => b - a)[0];
  }

  if (option === MIN) {
    return input.sort((a, b) => a - b)[0];
  }
};

const max = (...args) => {
  return compareArgs(args, MAX);
};

const min = (...args) => {
  return compareArgs(args, MIN);
};
