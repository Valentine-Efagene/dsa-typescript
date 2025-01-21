// https://medium.com/@andyjiang0312/solution-of-zigzag-sequence-challenge-38c6df4ae5a8#:~:text=position%20of%20array.-,2.,put%20them%20in%20decreasing%20order.
// https://www.hackerrank.com/challenges/zig-zag-sequence/forum/comments/1137794

// Those links prove that the example on Hackkerrank is wrong

export function solution(list: number[]): number[] {
  const n = list.length
  const sorted = [...list]
  const result = new Array(n).fill(0)
  sorted.sort((a, b) => a - b);
  const k = (n + 1) / 2
  const midIndex = k - 1

  for (let i = 0; i < n; i++) {
    if (i === midIndex) {
      result[i] = sorted[n - 1]
    }

    if (i < midIndex) {
      result[i] = sorted[i]
    }

    if (i > midIndex) {
      // Use the reflection equation, but subtract the midIndex, to account for the fact that the reflection is from the middle
      result[i] = sorted[n - (i - midIndex) - 1]
    }
  }

  return result
}