function add(a: number, b: number): number {
  return a + b;
}
enum CoinFlip {
  Head = "head",
  Tail = "tail",
}

function flipACoin(): CoinFlip {
  const random: number = Math.random();
  return random > 0.5 ? CoinFlip.Tail : CoinFlip.Head;
}

function concat(stringA: string, stringB: string): string {
  return stringA.concat(stringB);
}

function power2(x: bigint): bigint {
  return BigInt(2) ** x;
}

function getUser(
  firstName: string,
  lastName: string
): { firstName: string; lastName: string } {
  const capitalizedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  return { firstName: capitalizedFirstName, lastName: capitalizedLastName };
}

function greet(name: string): void {
  console.log(`Hi ${name}, nice to meet you!`);
}

function getNRandomNumbers(
  n: number,
  min: number = 0,
  max: number = 1000
): number[] {
  let randomNumbers: number[] = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.random() * (max - min) + min);
  }
  return randomNumbers;
}

function logCurrentTime(x: number, n: number): void {
  let counter = 0;
  const intervalId = setInterval(() => {
    console.log("Time: " + new Date());
    counter++;
    if (counter === Math.floor(n / x)) {
      clearInterval(intervalId);
    }
  }, x * 1000);
}

function callFuncNTimes<T>(func: () => T, n: number): T[] {
  const results: T[] = [];
  for (let i = 0; i < n; i++) {
    results.push(func());
  }
  return results;
}

function isNil(param: any): boolean {
  return !param;
}

function callPropInObj<T>(object: T, propertyName: keyof T): void {
  (object[propertyName] as unknown as () => void)?.();
}

function isGmail(email: string): boolean {
  return email.toLowerCase().endsWith("@gmail.com");
}


function duplicateArray<T>(array: T[]): T[] {
  return array.concat(array);
}

// examples

console.log("Addition of 3 and 4:", add(3, -14));
console.log("Flip a coin result:", flipACoin());
console.log('Concatenation of "Hello" and "World":', concat("Hello", "World"));
console.log("2 to the power of 3:", power2(BigInt(3)));
console.log("Get user with name John Doe:", getUser("john", "dOe"));
greet("Alice");
console.log(
  "Get 5 random numbers between 10 and 20:",
  getNRandomNumbers(5, 10, 20)
);
logCurrentTime(0.05, 0.25);
callFuncNTimes(flipACoin, 3);
console.log("Is nil (null):", isNil(null));
console.log("Is nil (undefined):", isNil(undefined));
console.log("Is nil (false):", isNil(false));
const obj = { myFunc: () => console.log("Called myFunc!") };
callPropInObj(obj, "myFunc");
console.log('Is "test@isEmail.com" a Gmail:', isGmail("test@Email.com"));
console.log('Is "test@isGmail.com" a Gmail:', isGmail("test@Gmail.com"));
console.log(
  "Duplicated array of fruits:",
  duplicateArray(["Apple", "Orange", "Strawberry"])
);
