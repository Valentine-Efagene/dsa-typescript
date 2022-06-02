/*
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

/**
 * The ASCII value of the lowercase alphabet is from 97 to 122.
 * And, the ASCII value of the uppercase alphabet is from 65 to 90.
 * Diff: 32
 */

export default function missingInteger(A: number[]): number {
  const entries = {}

  for (let a of A) {
    if (a > 0) {
      entries[a] = 1
    }
  }

  let i = 1
  while (true) {
    if (!entries[i]) {
      return i
    }

    i++
  }
}

console.log(missingInteger([-4, -5, 0, 3, 4, 5]))