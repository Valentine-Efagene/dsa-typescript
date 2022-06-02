/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function alternatingCharacters(s) {
    let result = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            result++;
        }
    }
    return result;
}
//const s = "AABAAB" // 2
// const s = "ABABABAB" // 0
// const s = "AAABBB" // 4
const s = "AAAA"; // 3
console.log(alternatingCharacters(s));
//# sourceMappingURL=index.js.map