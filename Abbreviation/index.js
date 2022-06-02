"use strict";
/*
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The ASCII value of the lowercase alphabet is from 97 to 122.
 * And, the ASCII value of the uppercase alphabet is from 65 to 90.
 * Diff: 32
 */
function abbreviation(a, b) {
    let bIndex = 0;
    const ASCII = Array(128).fill(0);
    for (let aVal of a) {
        ASCII[aVal]++;
    }
    for (let i = 0; i < a.length && bIndex < b.length; i++) {
        if (a[i] === a[bIndex] || a.toUpperCase() === b[bIndex]) {
            --ASCII[a[i].charAt(0)];
            ++bIndex;
        }
    }
    if (!(bIndex === b.length - 1))
        return 'NO';
    for (let i = 0; i < a.length; i++) {
        if (a[i].toUpperCase() === a[i]) {
            return 'NO';
        }
    }
    return 'YES';
}
exports.default = abbreviation;
console.log(abbreviation('BFZZVHdQYHQEMNEFFRFJTQmNWHFVXRXlGTFNBqWQmyOWYWSTDSTMJRYHjBNTEWADLgHVgGIRGKFQSeCXNFNaIFAXOiQORUDROaNoJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMvSTGEQCYAJSFvbqivjuqvuzafvwwifnrlcxgbjmigkms', 'BFZZVHQYHQEMNEFFRFJTQNWHFVXRXGTFNBWQOWYWSTDSTMJRYHBNTEWADLHVGIRGKFQSCXNFNIFAXOQORUDRONJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMSTGEQCYAJSF'));
//# sourceMappingURL=index.js.map