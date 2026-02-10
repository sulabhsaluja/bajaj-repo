const getFibonacci = (n) => {
  if (n < 0) return [];
  const series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, n + 1);
};

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimes = (arr) => arr.filter(isPrime);

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const hcfArray = (arr) => arr.reduce((a, b) => gcd(a, b));

const lcm = (a, b) => (a * b) / gcd(a, b);

const lcmArray = (arr) => arr.reduce((a, b) => lcm(a, b));

module.exports = {
  getFibonacci,
  getPrimes,
  hcfArray,
  lcmArray
};