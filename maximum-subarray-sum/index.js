function maximumSubarraySum(nums) {
    let globalMax = -Infinity;
    let localMax = 0;
    for (let num of nums) {
        localMax = localMax + num;
        if (localMax > globalMax) {
            globalMax = localMax;
        }
        if (localMax < 0) {
            localMax = 0;
        }
    }
    return globalMax;
}
function maximumSubarray(a) {
    let globalMax = -Infinity;
    let localMax = 0;
    const range = { start: 0, end: 0 };
    for (let i = 0; i < a.length; i++) {
        localMax = localMax + a[i];
        if (localMax > globalMax) {
            globalMax = localMax;
            range.end = i;
        }
        if (localMax < 0) {
            localMax = 0;
            if (i + 1 < a.length) {
                range.start = i + 1;
            }
        }
    }
    if (range.start === range.end)
        return {};
    return range;
}
console.log(maximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3]));
//# sourceMappingURL=index.js.map