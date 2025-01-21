"use strict";
/*
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.loneInteger = loneInteger;
function loneInteger(arr) {
    var hash = {};
    arr.forEach(function (val) {
        hash[val] = hash[val] ? hash[val] + 1 : 1;
    });
    for (var key in hash) {
        if (hash[key] === 1) {
            return parseInt(key);
        }
    }
    return null;
}
