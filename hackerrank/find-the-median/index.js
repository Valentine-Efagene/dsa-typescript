"use strict";
/*
 *
 */
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
exports.findMedian = findMedian;
function findMedian(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    // Step 1: Sort the array
    var sortedArray = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    // Step 2: Find the median
    var midIndex = Math.floor(sortedArray.length / 2);
    if (sortedArray.length % 2 === 0) {
        // Even number of elements, average the two middle numbers
        return (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
    }
    else {
        // Odd number of elements, return the middle number
        return sortedArray[midIndex];
    }
}
