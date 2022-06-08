'use strict';
/* This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5] */

Array.prototype.square = function () {
  let temp = [];
  for (const item of this) {
    if (typeof item === 'number') {
      temp.push(Math.pow(item, 2));
    } else {
      temp.push(item);
    }
  }
  // console.log(temp);
  return temp;
};

Array.prototype.cube = function () {
  let temp = [];
  for (const item of this) {
    if (typeof item === 'number') {
      temp.push(Math.pow(item, 3));
    } else {
      temp.push(item);
    }
  }
  // console.log(temp);
  return temp;
};

Array.prototype.average = function () {
  let temp = [];
  if (!this.length) {
    return NaN;
  }
  for (const item of this) {
    if (typeof item === 'number') {
      temp.push(item);
    } else {
      continue;
    }
  }
  const average = temp.reduce((sum, current) => sum + current, 0) / temp.length;
  // console.log(average);
  return average;
};

Array.prototype.sum = function () {
  let temp = [];
  if (!this.length) {
    return NaN;
  }
  for (const item of this) {
    if (typeof item === 'number') {
      temp.push(item);
    } else {
      continue;
    }
  }
  const sum = temp.reduce((sum, current) => sum + current, 0);
  // console.log(sum);
  return sum;
};

Array.prototype.even = function () {
  let temp = [];
  if (!this.length) {
    return NaN;
  }
  for (const item of this) {
    if (typeof item === 'number' && !(item % 2)) {
      temp.push(item);
    } else {
      continue;
    }
  }
  // console.log(temp);
  return temp;
};

Array.prototype.odd = function () {
  let temp = [];
  if (!this.length) {
    return NaN;
  }
  for (const item of this) {
    if (typeof item === 'number' && item % 2) {
      temp.push(item);
    } else {
      continue;
    }
  }
  // console.log(temp);
  return temp;
};

// let numbers = [1, 2, 3, 4, 5];
// numbers.square();
// numbers.cube();
// numbers.average();
// numbers.sum();
// numbers.even();
// numbers.odd();
