// randomUtils.mjs
export function getNRandomNumbersM(n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.random());
    }
    return randomNumbers;
}

export function getNRandomNumbersInRangeM(n, min, max) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.random() * (max - min) + min);
    }
    return randomNumbers;
}