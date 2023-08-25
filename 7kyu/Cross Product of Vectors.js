/* Make a function called crossProduct that takes two 3 dimensional vectors (in the form of two arrays) and returns their cross product. You need to check if the passed arguments are of the expected format, otherwise throw the message: "Arguments are not 3D vectors!".

crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
crossProduct('gobbledigook', [1,1,1]) //should throw the string "Arguments are not 3D vectors!"
Your function should handle non integers.

More info on cross products: https://en.wikipedia.org/wiki/Cross_product*/

function crossProduct(a, b) {
  if (!Array.isArray(a) || a.length !== 3 || !a.every(Number.isFinite)) {
    throw 'Arguments are not 3D vectors!';
  }

  if (!Array.isArray(b) || b.length !== 3 || !b.every(Number.isFinite)) {
    throw 'Arguments are not 3D vectors!';
  }

  const [a1, a2, a3] = a;
  const [b1, b2, b3] = b;

  return [a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1 * b2 - a2 * b1];
}
