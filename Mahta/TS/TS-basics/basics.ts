function add(a: number, b: number): number {
  return a + b;
}

function flipACoin(): string {
  const random: number = Math.random();
  if (random > 0.5) {
      return "tail";
  } else {
      return "head";
  }
}

function concat(stringA: string, stringB: string): string {
  return stringA.concat(stringB);
}

function power2(x: number): number {
  return 2 ** x;
}

function getUser(firstName: string, lastName: string): { firstName: string; lastName: string } {
  const capitalizedFirstName = firstName.replace(firstName.charAt(0), firstName.charAt(0).toUpperCase());
  const capitalizedLastName = lastName.replace(lastName.charAt(0), lastName.charAt(0).toUpperCase());
  return { firstName: capitalizedFirstName, lastName: capitalizedLastName };
}

function greet(name: string): void {
  console.log(`Hi ${name}, nice to meet you!`);
}

function getNRandomNumbers(n: number, min: number = 0, max: number = 1000): number[] {
  let randomNumbers: number[] = [];
  for (let i = 0; i < n; i++) {
      randomNumbers.push(Math.random() * (max - min) + min);
  }
  return randomNumbers;
}

function logCurrentTime(x: number, n: number): void {
  let counter = 0;
  const intervalId = setInterval(() => {
      console.log('Time: ' + new Date());
      counter++;
      if (counter === Math.floor(n / x)) {
          clearInterval(intervalId);
      }
  }, x * 1000);
}

function callFuncNTimes(func: Function, n: number, ...funcParams: any[]): void {
  for (let i = 0; i < n; i++) {
      func(...funcParams);
  }
}

function isNil(param: any): boolean {
  return !param;
}

function callPropInObj(object: any, propertyName: string): void {
  object?.[propertyName]?.();
}

function isGmail(email: string): boolean {
  return email.endsWith("@isGmail.com");
}

function duplicateArray(): string[] {
  let fruits: string[] = ['Apple', 'Orange', 'Strawberry'];
  fruits = fruits.concat(fruits);
  return fruits;
}

// Function calls with example inputs

console.log('Addition of 3 and 4:', add(3, -14));
console.log('Flip a coin result:', flipACoin());
console.log('Concatenation of "Hello" and "World":', concat('Hello', 'World'));
console.log('2 to the power of 3:', power2(3));
console.log('Get user with name John Doe:', getUser('john', 'doe'));
greet('Alice');
console.log('Get 5 random numbers between 10 and 20:', getNRandomNumbers(5, 10, 20));
logCurrentTime(0.05, 0.25);
callFuncNTimes(console.log, 3, 'This is a test.');
console.log('Is nil (null):', isNil(null));
console.log('Is nil (undefined):', isNil(undefined));
console.log('Is nil (false):', isNil(false));
const obj = { myFunc: () => console.log('Called myFunc!') };
callPropInObj(obj, 'myFunc');
console.log('Is "test@isGmail.com" a Gmail:', isGmail('test@isEmail.com'));
console.log('Is "test@isGmail.com" a Gmail:', isGmail('test@isGmail.com'));
console.log('Duplicated array of fruits:', duplicateArray());
