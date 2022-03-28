"use strcit";

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word) {
  let arr = [];
  for (const char of word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (char.toLowerCase() == word[i].toLowerCase() && count < 2) {
        count++;
      }
      if (char.toLowerCase() == word[i].toLowerCase() && count == 2) {
        count++;
        arr.push(")");
      }
    }
    if (count < 2) {
      arr.push("(");
    }
  }
  return arr.join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

// alert(duplicateEncode("din"));
// alert(duplicateEncode("recede"));
// alert(duplicateEncode("Success"));
// alert(duplicateEncode("(( @"));
