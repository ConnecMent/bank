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

// // concat two strings
// function concat(a: string, b: string): string {}

// // 2^x = ?
// function power2(number x): bigint {}

// // user object with first name and last name, both capitalized
// // e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
// // you should define the UserObject interface
// function getUser(firstName: string, lastName: string): UserObject {}

// // greet someone!
// // e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
// function greet(name: string): void {}

// // get array of n random numbers
// function getNRandomNumbers(n: number): Array<number> {}

// // get sorted array of n random numbers, in range min to max
// function getNRandomNumbers(n: number, min: number, max:number): Array<number> {}

// // log current time with a x seconds interval, for n seconds
// function logCurrentTime(x: number, n: number): void {}

// // higher order function: call the function in the parameters list
// // e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
// function callFuncNTimes(func: () => string, n: number): void {}

// // return true if parameter is falsy, false otherwise
// function isNil(param?: number): boolean {}

// // return true if parameter is number, false otherwise
// function isNumber(param: number | string): boolean {}

// // call property in object
// // e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
// function callPropInObj<T>(object: T, propertyName: keyof typeof T): void {}

// // if the email is gmail
// function isGmail(email: string): boolean {}

// // duplicate array
// // e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
// function duplicateArray<T>(array1: Array<T>, array2: Array<T>): boolean {}