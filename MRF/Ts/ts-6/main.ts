// add number a to b
function add(a: number, b: number): number {
  return a + b;
}

// flip a coin and log the result (head or tail)
// define enum for return type CoinSide
enum CoinSide {
  head,
  tail,
}

function flipACoin(): CoinSide {
  if (Math.random() > 0.5) return CoinSide.head;
  else return CoinSide.tail;
}

// concat two strings
function concat(a: string, b: string): string {
  return a.concat(a);
}

// 2^x = ?
function power2(x: number): bigint {
  return BigInt(x ** 2);
}

// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
// you should define the UserObject interface
interface UserObject {
  firstName: string;
  lastName: string;
}

function getUser(firstName: string, lastName: string): UserObject {
  let user: UserObject = {
    firstName: firstName[0].toUpperCase() + firstName.slice(1),
    lastName: lastName[0].toUpperCase() + lastName.slice(1),
  };
  return user;
}

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name: string): void {
  console.log(`Hello, ${name}! Hope you the best.`);
}

// get array of n random numbers
function getNRandomNumbers(n: number): Array<number> {
  const array: number[] = [];
  for (let index = 0; index < n; index++) {
    array.push(Math.random());
  }

  return array;
}

// get sorted array of n random numbers, in range min to max
function getNRandomNumbersRange(
  n: number,
  min: number,
  max: number
): Array<number> {
  const array: number[] = [];
  for (let index = 0; index < n; index++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return array;
}

// log current time with a x seconds interval, for n seconds
function logCurrentTime(x: number, n: number) {
  let startTime = new Date().getTime() / 1000;

  let ID = setInterval(printTime, x * 1000);

  function printTime() {
    let date = new Date();

    if (startTime + n + 1 < date.getTime() / 1000) {
      clearInterval(ID);
      return;
    }

    console.log(
      "Time:",
      date.getHours(),
      ":",
      date.getMinutes(),
      ":",
      date.getSeconds()
    );
  }
}

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(
  func: (...args: any[]) => any,
  n: number,
  ...funcParam: any[]
) {
  for (let i = 0; i < n; i++) {
    func(...funcParam);
  }
}
// return true if parameter is falsy, false otherwise
function isNil(param?: number): boolean {
  return param == null || isNaN(param);
}

// return true if parameter is number, false otherwise
function isNumber(param: number | string): boolean {
  return typeof param === "number";
}

// // call property in object
// // e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
// function callPropInObj<T>(object: T, propertyName: keyof typeof T): void {}

// // if the email is gmail
// function isGmail(email: string): boolean {}

// // duplicate array
// // e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
// function duplicateArray<T>(array1: Array<T>, array2: Array<T>): boolean {}
