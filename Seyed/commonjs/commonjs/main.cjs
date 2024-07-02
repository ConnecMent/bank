// main.js
const RandomNumbers= require('./randomUtils.cjs');
const isNil = require('./isNil.cjs');

console.log(RandomNumbers.getNRandomNumbers(5));
console.log(RandomNumbers.getNRandomNumbersInRange(5,10,20));
console.log(isNil.isNil(null)); // true
console.log(isNil.isNil(undefined)); // true
console.log(isNil.isNil(5)); // false