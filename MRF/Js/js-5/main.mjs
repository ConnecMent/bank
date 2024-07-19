import isNil from "./isNil.mjs";
import { getNRandomNumbers, getNRandomNumbersRange } from "./randomUtils.mjs";

console.log(getNRandomNumbers(12));
console.log(getNRandomNumbersRange(3, 12, 15));

console.log(isNil(12));
console.log(isNil());
// EOF
