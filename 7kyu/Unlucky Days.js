"use strict";
/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year) {
  let count = 0;
  for (let i = 0; i <= 11; i++) {
    let date = new Date();
    date.setFullYear(year, i, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }
  console.log(count);
  return count;
}

unluckyDays(2015);
unluckyDays(1986);
