/*
 *
 */

export function loneInteger(arr: number[]): number {
  const hash: {
    [key: number]: number;
  } = {}

  arr.forEach((val) => {
    hash[val] = hash[val] ? hash[val] + 1 : 1
  })

  for (const key in hash) {
    if (hash[key] === 1) {
      return parseInt(key)
    }
  }

  return null
}