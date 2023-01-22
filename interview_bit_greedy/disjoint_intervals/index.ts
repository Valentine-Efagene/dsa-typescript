/**
 * Given an array of numbers, return the highest product of multiplying
 * any 3 elements
 * @param array <number>
 * @returns number
 */
export default function disjoint_intervals(array: [number, number][]): number {
  array.sort((a, b) => a[1] - b[1]);
  let [prev_s, prev_e] = [...array[0]];
  let count = 1;

  array.forEach(([s, e]) => {
    if (s > prev_e) {
      count++;
      [prev_s, prev_e] = [...[s, e]];
    }
  });

  return count;
}

console.log(
  disjoint_intervals([
    [1, 2],
    [2, 10],
    [4, 6],
  ])
);
