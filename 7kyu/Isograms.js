"use strict";

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
  let set = new Set(str.toLowerCase());
  let arr = str.split("");
  if (str === "") {
    return true;
  } else if (arr.length === set.size) {
    return true;
  } else return false;
}
