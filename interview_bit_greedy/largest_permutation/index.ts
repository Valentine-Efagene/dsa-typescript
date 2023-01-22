/**
 * Given an array A of a random permutation of numbers from 1 to N. Given B, the number of swaps in A that we can make,
 * find the largest permutation possible.
 * @param array: number[]
 * @param B: number
 * @returns number
 */
export default function largest_permutation(
  array: number[],
  B: number
): number[] {
  const map = {};
  let misplaced_max = array.length;
  let b = B;

  for (const [key, value] of array.entries()) {
    map[value] = key;
  }

  let i = 0;
  let j: number;

  while (b > 0 && array.length) {
    j = map[misplaced_max];

    if (i !== j) {
      b--;
      [array[i], array[j]] = [array[j], array[i]];
      [map[array[i]], map[array[j]]] = [map[array[j]], map[array[i]]];
    }

    i++;
    misplaced_max--;
  }

  return array;
}

console.log(largest_permutation([1, 3, 2], 1));
console.log(largest_permutation([3, 2, 4, 1, 5], 3));
