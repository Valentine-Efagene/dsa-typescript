/*
 *
 */

export function func(arr: number[][]): number {
  const m = arr.length
  const n = arr?.[0]?.length ?? 0

  const ld = arr.map((row, index) => row[index]).reduce((acc, curr) => acc + curr, 0)
  const rd = arr.map((row, index) => row[arr.length - index - 1]).reduce((acc, curr) => acc + curr, 0)

  return Math.abs(ld - rd)
}