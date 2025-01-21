"use strict";
/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fib = fib;
function fib(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
//# sourceMappingURL=index.js.map