// main.mjs
import { getNRandomNumbersM, getNRandomNumbersInRangeM } from './randomUtils.mjs';
import isNilM from './isNil.mjs';
// import { getNRandomNumbersM, getNRandomNumbersInRangeM } from './randomUtils.mjs';

console.log(getNRandomNumbersM(5));
console.log(getNRandomNumbersInRangeM(5, 10, 20));
console.log(isNilM(null)); // true
console.log(isNilM(undefined)); // true
console.log(isNilM(5)); // false