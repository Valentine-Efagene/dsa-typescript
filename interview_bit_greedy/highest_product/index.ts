/**
 * Given an array of numbers, return the highest product of multiplying
 * any 3 elements
 * @param array <number>
 * @returns number
 */
export default function highest_product(array: number[]): number {
  array.sort((a, b) => a - b);
  const N = array.length;
  const LAST_THREE = array[N - 1] * array[N - 2] * array[N - 3];
  const FIRST_2_NEG_AND_LAST_1 = array[0] * array[1] * array[N - 1];

  return LAST_THREE > FIRST_2_NEG_AND_LAST_1
    ? LAST_THREE
    : FIRST_2_NEG_AND_LAST_1;
}

console.log(highest_product([1, 2, 3, 4]));
