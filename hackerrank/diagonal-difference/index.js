"use strict";
/*
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = func;
function func(arr) {
    var _a, _b;
    var m = arr.length;
    var n = (_b = (_a = arr === null || arr === void 0 ? void 0 : arr[0]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    var ld = arr.map(function (row, index) { return row[index]; }).reduce(function (acc, curr) { return acc + curr; }, 0);
    var rd = arr.map(function (row, index) { return row[arr.length - index - 1]; }).reduce(function (acc, curr) { return acc + curr; }, 0);
    return Math.abs(ld - rd);
}
