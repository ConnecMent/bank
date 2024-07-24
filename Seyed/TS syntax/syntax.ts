// add number a to b
function add(a: number, b: number): number {
    return a + b;
}

// flip a coin and log the result (head or tail)
// define enum for return type CoinSide
enum CoinSide {head , tail}
function flipACoin(): CoinSide {
    if(Math.random()%2 == 0){
        return CoinSide.head;
    }
    else{
        return CoinSide.tail;
    }
}


// concat two strings
function concat(a: string, b: string): string {
    return a.concat(b);
}


// 2^x = ?
function power2(x: number) : bigint {
    return BigInt(Math.pow(2,x));
}


// user object with first name and last name, both capitalized
// e.g. getUser('hello', 'world') is { firstName: 'Hello', lastName: 'World' }
// you should define the UserObject interface
interface UserObject{
    fName : string,
    lName : string; 
}

function getUser(firstName: string, lastName: string): UserObject {
    const x: UserObject = {
        fName : firstName[0].toUpperCase() + firstName.slice(1).toLowerCase(),
        lName : lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    }
    return x;
}

console.log(getUser("seyeD","mOJtaba"));

// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name: string): void {
    console.log("Hello, " + name + "! Hope you the best.");
}


// get array of n random numbers
function getNRandomNumbers1(n: number): Array<number> {
    let save: number[] = [];
    for(let i=0; i < n ; i++){
        save.push(Math.random());
    }
    return save;
}


// get sorted array of n random numbers, in range min to max
function getNRandomNumbers2(n: number, min: number, max:number): Array<number> {
    let save: number[] = [];
    for(let i=0; i < n ; i++){
        save.push(Math.random() * (max - min) + min);
    }
    return save.sort((a, b) => a - b);
}


// log current time with a x seconds interval, for n seconds
function logCurrentTime(x: number, n: number): void {
    const intervalId = setInterval(() => {
        console.log(new Date().toLocaleTimeString());
    }, x * 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, n * 1000);
}

// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func: () => string, n: number): void {
    for(let i=0 ; i<n ; i++){
        console.log(func());
    }
}


// return true if parameter is falsy, false otherwise
function isNil(param?: number): boolean {
    if(param == 0
        || param == -0
        || param == null
        || param == ''
        || param == ""
        || param == undefined
        || param == NaN
        || param == 0n
        || param == false
    )
        return true;
    else
        return false;
}

// return true if parameter is number, false otherwise
function isNumber(param: number | string): boolean {
    return typeof param === 'number';
}


// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj<T>(object: T, propertyName: keyof T): void {
    const prop = object[propertyName];

    if (typeof prop === 'function') {
        prop();
    } else {
        console.log(`Property '${String(propertyName)}' is not a function.`);
    }
}

const obj = {
    callableProp: function() {
        console.log('hello!');
    },
    nonCallableProp: 42
};


// if the email is gmail
function isGmail(email: string): boolean {
    email = email.concat(".");
    if(email.slice(-11,-1) == "@gmail.com")
        return true;
    else
        return false;
}


// duplicate array
// e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
function duplicateArray<T>(array1: Array<T>): boolean {
        array1.concat(array1);
        return true;
}