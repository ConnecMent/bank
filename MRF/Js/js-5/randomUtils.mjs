export function getNRandomNumbers(n) {
  const final = new Array(n).fill();
  return final.map(Math.random);
}

export function getNRandomNumbersRange(n, min, max) {
  const final = [];
  for (let i = 0; i < n; i++) {
    // plus 1 to include max
    const x = Math.floor(Math.random() * (max - min + 1)) + min;
    final.push(x);
  }
  return final;
}
