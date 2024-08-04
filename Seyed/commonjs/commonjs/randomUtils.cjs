const getNRandomNumbers = (n) => {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.random());
    }
    return randomNumbers;
}

const getNRandomNumbersInRange = (n, min, max) => {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.random() * (max - min) + min);
    }
    return randomNumbers;
}

module.exports = {getNRandomNumbers,getNRandomNumbersInRange};