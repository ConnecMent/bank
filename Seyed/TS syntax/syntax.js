"use strict";
// add number a to b
function add(a, b) {
    return a + b;
}
// flip a coin and log the result (head or tail)
// define enum for return type CoinSide
var CoinSide;
(function (CoinSide) {
    CoinSide[CoinSide["head"] = 0] = "head";
    CoinSide[CoinSide["tail"] = 1] = "tail";
})(CoinSide || (CoinSide = {}));
function flipACoin() {
    if (Math.random() % 2 == 0) {
        return CoinSide.head;
    }
    else {
        return CoinSide.tail;
    }
}
// concat two strings
function concat(a, b) {
    return a.concat(b);
}
// 2^x = ?
function power2(x) {
    return BigInt(Math.pow(2, x));
}
function getUser(firstName, lastName) {
    const x = {
        fName: firstName[0].toUpperCase() + firstName.slice(1).toLowerCase(),
        lName: lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
    };
    return x;
}
// greet someone!
// e.g. greet('ConnecMent') is "Hello, ConnecMent! Hope you the best."
function greet(name) {
    console.log("Hello, " + name + "! Hope you the best.");
}
// get array of n random numbers
function getNRandomNumbers1(n) {
    let save = [];
    for (let i = 0; i < n; i++) {
        save.push(Math.random());
    }
    return save;
}
// get sorted array of n random numbers, in range min to max
function getNRandomNumbers2(n, min, max) {
    let save = [];
    for (let i = 0; i < n; i++) {
        save.push(Math.random() * (max - min) + min);
    }
    return save.sort((a, b) => a - b);
}
// log current time with a x seconds interval, for n seconds
function logCurrentTime(x, n) {
    const intervalId = setInterval(() => {
        console.log(new Date().toLocaleTimeString());
    }, x * 1000);
    setTimeout(() => {
        clearInterval(intervalId);
    }, n * 1000);
}
// higher order function: call the function in the parameters list
// e.g. callFuncNTimes(flipACoin, 3) calls flipACoin 3 times
function callFuncNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        console.log(func());
    }
}
// return true if parameter is falsy, false otherwise
function isNil(param) {
    if (param == 0
        || param == -0
        || param == null
        || param == ''
        || param == ""
        || param == undefined
        || param == NaN
        || param == 0n
        || param == false)
        return true;
    else
        return false;
}
// return true if parameter is number, false otherwise
function isNumber(param) {
    return typeof param === 'number';
}
// call property in object
// e.g. in obj = { callableProp: function () { console.log('hello!') } }, callPropInObj(obj, 'callableProp') will log "hello!"
function callPropInObj(object, propertyName) {
    const prop = object[propertyName];
    if (typeof prop === 'function') {
        prop();
    }
    else {
        console.log(`Property '${String(propertyName)}' is not a function.`);
    }
}
const obj = {
    callableProp: function () {
        console.log('hello!');
    },
    nonCallableProp: 42
};
// if the email is gmail
function isGmail(email) {
    email = email.concat(".");
    if (email.slice(-11, -1) == "@gmail.com")
        return true;
    else
        return false;
}
// duplicate array
// e.g. duplicateArray([1,2,3]) is [1,2,3,1,2,3]
function duplicateArray(array1) {
    array1.concat(array1);
    return true;
}
