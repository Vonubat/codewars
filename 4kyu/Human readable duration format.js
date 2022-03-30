"use strict";
/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration(seconds) {
  let date = new Date(seconds * 1000); // create date
  console.log(date);

  let timeDB = {
    year: date.getUTCFullYear() - 1970,
    day: function () {
      let sumOfDays = Math.floor(seconds / 60 / 60 / 24);
      if (sumOfDays >= 365) {
        sumOfDays -= 365 * this.year;
      }

      return sumOfDays;
    },
    hour: date.getUTCHours(),
    min: date.getUTCMinutes(),
    sec: date.getUTCSeconds(),

    // check for 0  seconds

    nullTime: function () {
      if (seconds === 0) {
        return "now";
      }
      return "";
    },
  };

  // create array of time + 1 space for format in str
  let result = [
    [" year", timeDB.year],
    [" day", timeDB.day()],
    [" hour", timeDB.hour],
    [" minute", timeDB.min],
    [" second", timeDB.sec],
  ];

  // delete 0 positions

  for (let i = 0; i < result.length; i) {
    if (result[i][1] === 0) {
      result.splice(i, 1);
    } else i++;
  }

  // plural or singular?

  for (let i = 0; i < result.length; i++) {
    if (result[i][0] === " year" && result[i][1] > 1) {
      result[i][0] = " years";
    } else if (result[i][0] === " day" && result[i][1] > 1) {
      result[i][0] = " days";
    } else if (result[i][0] === " hour" && result[i][1] > 1) {
      result[i][0] = " hours";
    } else if (result[i][0] === " minute" && result[i][1] > 1) {
      result[i][0] = " minutes";
    } else if (result[i][0] === " second" && result[i][1] > 1) {
      result[i][0] = " seconds";
    }
  }

  // reverse internal arrays for convenience

  for (const item of result) {
    item.reverse();
  }

  // add commas & and

  if (result.length == 2) {
    result[1][0] = " and " + result[1][0];
  }

  if (result.length == 3) {
    result[2][0] = " and " + result[2][0];
    result[1][0] = ", " + result[1][0];
  }

  if (result.length == 4) {
    result[3][0] = " and " + result[3][0];
    result[2][0] = ", " + result[2][0];
    result[1][0] = ", " + result[1][0];
  }

  if (result.length == 5) {
    result[4][0] = " and " + result[4][0];
    result[3][0] = ", " + result[3][0];
    result[2][0] = ", " + result[2][0];
    result[1][0] = ", " + result[1][0];
  }

  let str = `${timeDB.nullTime()}`; // declaration str for Human readable duration format + nullTime check

  // create str with Human readable duration format

  for (let i = 0; i < result.length; i++) {
    for (const item of result[i]) {
      str = str + result[i][0] + result[i][1];
      break; // to cancel the loop on the  second "item" of "result[i]"
    }
  }

  console.log(str);
  return str;
}

formatDuration(0);
formatDuration(55);
formatDuration(60);
formatDuration(65);
formatDuration(3421);
formatDuration(3425);
formatDuration(13421);
formatDuration(24541421);
formatDuration(31968000);
