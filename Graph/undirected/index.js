"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function editDistance(str1, str2, n, m, memo = {}) {
    if (n === 0) {
        return m;
    }
    if (m === 0) {
        return n;
    }
    const key = `${m}${n}`;
    if (str1[m - 1] === str2[n - 1]) {
        memo[key] = editDistance(str1, str2, m - 1, n - 1);
    }
    else {
        memo[key] = 1 + Math.min(editDistance(str1, str2, m, n - 1), editDistance(str1, str2, m - 1, n), editDistance(str1, str2, m - 1, n - 1));
    }
    return memo[key];
}
exports.default = editDistance;
const str1 = "MARCH";
const str2 = "CART";
console.log(editDistance(str1, str2, str1.length, str2.length));
//# sourceMappingURL=index.js.map