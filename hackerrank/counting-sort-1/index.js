"use strict";
/*
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = func;
function func(arr) {
    var freq = Array(100).fill(0);
    for (var i = 0; i < arr.length; i++) {
        freq[arr[i]] = freq[arr[i]] + 1;
    }
    return freq;
}
