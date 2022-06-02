function makeAnagram(a, b) {
    let count = 0;
    const countA = Array(128).fill(0);
    const countB = Array(128).fill(0);
    for (let c of a) {
        countA[c.charCodeAt(0)]++;
    }
    for (let c of b) {
        countB[c.charCodeAt(0)]++;
    }
    for (let i = 0; i < 128; i++) {
        count += Math.abs(countA[i] - countB[i]);
    }
    return count;
}
const a = "cde";
const b = "dcf";
console.log(makeAnagram(a, b));
//# sourceMappingURL=making_anagrams.js.map