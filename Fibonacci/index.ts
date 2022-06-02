/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function fib(n: number, memo: object = {}): number {
  if (n in memo) {
    return memo[n]
  }

  if (n <= 2) {
    return 1
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(50))