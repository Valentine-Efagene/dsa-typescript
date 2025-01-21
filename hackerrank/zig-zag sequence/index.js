"use strict";
// https://medium.com/@andyjiang0312/solution-of-zigzag-sequence-challenge-38c6df4ae5a8#:~:text=position%20of%20array.-,2.,put%20them%20in%20decreasing%20order.
// https://www.hackerrank.com/challenges/zig-zag-sequence/forum/comments/1137794
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
// Those links prove that the example on Hackkerrank is wrong
function solution(list) {
    var n = list.length;
    var sorted = __spreadArray([], list, true);
    var result = new Array(n).fill(0);
    sorted.sort(function (a, b) { return a - b; });
    var k = (n + 1) / 2;
    var midIndex = k - 1;
    for (var i = 0; i < n; i++) {
        if (i === midIndex) {
            result[i] = sorted[n - 1];
        }
        if (i < midIndex) {
            result[i] = sorted[i];
        }
        if (i > midIndex) {
            // Use the reflection equation, but subtract the midIndex, to account for the fact that the reflection is from the middle
            result[i] = sorted[n - (i - midIndex) - 1];
        }
    }
    return result;
}
