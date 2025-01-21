"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function removeCharacterAt(str, index) {
    var array = str.split('');
    array.splice(index, 1);
    return array.join('');
}
function isPalindrome(str) {
    for (var index = 0; index < str.length; index++) {
        if (str[index] !== str[str.length - index - 1]) {
            return false;
        }
    }
    return true;
}
function solution(str) {
    if (isPalindrome(str)) {
        return -1;
    }
    for (var index = 0; index < str.length; index++) {
        var reduced = removeCharacterAt(str, index);
        if (isPalindrome(removeCharacterAt(str, index))) {
            return index;
        }
    }
    return -1;
}
