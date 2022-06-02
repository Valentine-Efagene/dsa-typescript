"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalan = void 0;
function factorial(n, memo = {}) {
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
function catalan(n, k = n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (k === 2) {
        return (n + k) / k;
    }
    return ((n + k) / k) * catalan(n, k - 1);
}
exports.catalan = catalan;
console.log(catalan(5));
//# sourceMappingURL=index.js.map