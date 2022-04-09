"use strict";
/*
Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

He knows that the time is 11:38

in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.
 */

function WhatIsTheTime(timeInMirror) {
  //"05:25" --> "06:35";
  // Happy Coding
  let arr = timeInMirror.split(":");

  // case for 'hour'
  if (arr[0] == "12" && arr[1] == "00") {
    arr[0] = "12";
  } else if (arr[0] == "11" && arr[1] == "00") {
    arr[0] = "12";
  } else if (arr[1] == "00") {
    arr[0] = `${12 - arr[0]}`;
  } else if (arr[0] == "12") {
    arr[0] = "11";
  } else {
    arr[0] = `${12 - (+arr[0] + 1)}`;
  }

  // case for min
  if (arr[1] == "00") {
    arr[1] == "00";
  } else {
    arr[1] = `${60 - arr[1]}`;
  }

  // add 0, if is absent

  if (arr[1][1] == undefined) {
    arr[1] = "0" + arr[1];
  }
  if (arr[0][1] == undefined) {
    arr[0] = "0" + arr[0];
  }

  // error in hour (00 -> or 12)
  if (arr[0] == "00") {
    arr[0] = "12";
  }

  let result = arr.join(":");
  console.log(result);
  return result;
}

WhatIsTheTime("05:25");
WhatIsTheTime("01:50 ");
WhatIsTheTime("11:58");
WhatIsTheTime("12:01");
WhatIsTheTime("12:00");
