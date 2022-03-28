"use strict";

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let consonantArr = [];
  let arr = str.split("");

  for (let key of arr) {
    switch (key.toLowerCase()) {
      case "a":
        break;
      case "e":
        break;
      case "i":
        break;
      case "o":
        break;
      case "u":
        break;

      default:
        consonantArr.push(key);
    }
  }

  return consonantArr.join("");
}

//A, E, I, O, U,
