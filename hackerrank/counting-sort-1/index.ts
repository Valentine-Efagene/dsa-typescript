/*
 *
 */

export function func(arr: number[]): number[] {
  const freq = Array(100).fill(0)

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = freq[arr[i]] + 1
  }

  return freq
}