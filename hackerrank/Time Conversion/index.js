"use strict";
/*
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeConversion = timeConversion;
function timeConversion(str) {
    var meridian = str.slice(-2);
    var MAX = 12;
    var time = str.slice(0, 8);
    var _a = time.split(':'), h = _a[0], m = _a[1], s = _a[2];
    var hr = parseInt(h);
    if (hr === MAX) {
        hr = (meridian === 'PM') ? MAX : 0;
    }
    else {
        hr = (meridian === 'PM') ? (hr + MAX) % 24 : hr;
    }
    return "".concat(hr < 10 ? '0' : '').concat(hr, ":").concat(m, ":").concat(s);
}
