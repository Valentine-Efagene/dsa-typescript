"use strict";
/**
 * You have a 2D array of integers. For each modification, you can change the value of any element
 * Count the number of modifications to satisfy
 * 1. The element to the right is not same as the element
 * 2. The element under is same
 *
 * @param column
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
exports.solutionChatGpt = solutionChatGpt;
function getModal(column, ignore) {
    var freqMap = {};
    var mode = null;
    var maxFreq = 0;
    for (var _i = 0, column_1 = column; _i < column_1.length; _i++) {
        var x = column_1[_i];
        if (ignore.includes(x)) {
            freqMap[x] = 0;
            continue;
        }
        freqMap[x] = freqMap[x] ? freqMap[x] + 1 : 1;
        if (freqMap[x] > maxFreq) {
            mode = x;
        }
    }
    return mode;
}
function solution(array) {
    var modals = [];
    var modifications = 0;
    var _loop_1 = function (i) {
        var column = [];
        for (var j = 0; j < array.length; j++) {
            column.push(array[j][i]);
        }
        var mode = getModal(column, modals);
        if (mode == null) {
            modifications += column.length;
            return "continue";
        }
        else {
            modals.push(mode);
            var count = column.reduce(function (acc, curr) { return acc + (curr === mode ? 0 : 1); }, 0);
            modifications += count;
        }
    };
    for (var i = 0; i < array[0].length; i++) {
        _loop_1(i);
    }
    return modifications;
}
function solutionChatGpt(grid) {
    var _a;
    var modifications = 0;
    var rows = grid.length;
    var cols = ((_a = grid[0]) === null || _a === void 0 ? void 0 : _a.length) || 0;
    if (rows === 0 || cols === 0)
        return 0; // Handle edge case for empty grid
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            // Check the element to the right
            if (j < cols - 1 && grid[i][j] === grid[i][j + 1]) {
                // Increment modifications and change the next element
                modifications++;
                grid[i][j + 1] = grid[i][j] + 1; // Modify to a different value
            }
            // Check the element below
            if (i < rows - 1 && grid[i][j] !== grid[i + 1][j]) {
                // Increment modifications and align the below element
                modifications++;
                grid[i + 1][j] = grid[i][j]; // Modify to match the current element
            }
        }
    }
    console.log(grid);
    return modifications;
}
