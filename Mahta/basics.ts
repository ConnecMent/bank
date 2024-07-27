function add(a: number, b: number){
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
