"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param A : Petrol in cities
 * @param X : Cities
 * @param tank : Available petrol in the tank
 * @param visited : List of all visited cities
 * @param costs : Memo holding cost of travels between cities
 * @param memo : Map to memoize results
 * @returns
 */
function petrolCities(A, X, solutionPath = [], current = 0, tank = 0, visited = [], costs = {}, memo = {}) {
    let count = 1;
    if (current in memo)
        return memo[current];
    visited.push(current);
    tank += A[current];
    let maxVal = 0;
    let best = 0;
    for (let k = 0; k < A.length; k++) {
        if (k in visited)
            continue;
        const key = [current, k].sort().join(',');
        costs[key] = Math.abs(X[current] - X[k]);
        if (costs[key] > tank)
            continue;
        let newVal = petrolCities(A, X, solutionPath, current = k, tank - costs[key], visited, costs);
        if (newVal > maxVal) {
            maxVal = newVal;
            best = k;
        }
    }
    solutionPath.unshift(best);
    memo[current] = count + maxVal;
    return memo[current];
}
exports.default = petrolCities;
const solutionPath = [];
console.log(petrolCities([4, 1, 4, 3, 3], [8, 10, 11, 13, 100], solutionPath));
console.log(solutionPath);
//# sourceMappingURL=index.js.map