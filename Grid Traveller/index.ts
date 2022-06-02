/**
 * You are a traveller on a 2D grid. You begin in the top-left corner,
 * your goal is to travel to the bottom-right corner.
 * You may only move down or right.
 * 
 * In how many ways can you travel to the goal on the grid with
 * dimensions m * n
 **/

export default function gridTraveller(m: number, n: number, memo = {}): number {
  const key = m + ',' + n

  if (key in memo) return memo[key]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo)
  return memo[key]
}

console.log(gridTraveller(3, 3))