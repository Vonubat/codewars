'use strict';
/* You are developing an image hosting website.

You have to create a function for generating random and unique image filenames.

Create a function for generating a random 6 character string which will be used to access the photo URL.

To make sure the name is not already in use, you are given access to an PhotoManager object.

You can call it like so to make sure the name is unique

// at this point, the website has only one photo, hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
Note: We consider two names with same letters but different cases to be unique. */

function generateName() {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const uniqueChar = [];
  for (let i = 0; i < 6; i++) {
    uniqueChar.push(alphabet[Math.round(Math.random() * alphabet.length - 1)]);
    if (Math.random() > 0.5) {
      const temp = uniqueChar[i];
      uniqueChar.splice(i, 1, temp.toUpperCase());
    }
  }
  console.log(uniqueChar);
  return uniqueChar.join('');
}

generateName();
