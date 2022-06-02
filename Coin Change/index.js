"use strict";
/**
 * The function should return a boolean indicating whether or not it is possible
 * to generate the target sum, using numbers from the array. You may use an element of the array
 * as many times as needed.
 * You may use an element of the array as many tiems as needed.
 **/
Object.defineProperty(exports, "__esModule", { value: true });
function change(amount, coins, currentIndex = 0, memo = {}) {
    if (amount in memo)
        return memo[amount];
    if (amount === 0)
        return 1;
    if (amount < 0)
        return 0;
    let nCombos = 0;
    for (let i = currentIndex; i < coins.length; i++) {
        nCombos += change(amount - coins[i], coins, i, memo);
    }
    return nCombos;
}
exports.default = change;
console.log(change(4, [1, 2]));
//# sourceMappingURL=index.js.map