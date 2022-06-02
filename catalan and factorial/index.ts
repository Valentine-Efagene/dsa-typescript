function factorial(n: number, memo = {}) {
  if (n == 0 || n == 1)
    return 1;

  return factorial(n - 1) * n;
}

/**
 * https://en.wikipedia.org/wiki/Catalan_number
 * @param n 
 * @param k 
 * @returns number
 */
export function catalan(n: number, k = n): number {
  if (n === 0 || n === 1) {
    return 1
  }

  if (k === 2) {
    return (n + k) / k
  }

  return ((n + k) / k) * catalan(n, k - 1)
}

console.log(catalan(5))