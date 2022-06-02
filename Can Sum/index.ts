/**
 * The function should return a boolean indicating whether or not it is possible
 * to generate the target sum, using numbers from the array. You may use an element of the array
 * as many times as needed.
 * You may use an element of the array as many tiems as needed.
 **/

export default function canSum(targetSum: number, numbers: number[], memo = {}): boolean {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let num of numbers) {
    const remainder = targetSum - num

    if (canSum(remainder, numbers, memo) == true) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}

console.log(canSum(300, [7, 14]))