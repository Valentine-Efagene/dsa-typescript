/**
 * Given N bulbs, either on (1) or off (0).
 * Turning on the ith bulb causes all remaining bulbs on the right to flip.
 * Find the min number of switches to turn all the bulbs on.
 **/

export default function bulbs(bulb_states: number[]): number {
  let count = 0;

  for (let i = 0; i < bulb_states.length; i++) {
    let bulb_state: boolean = bulb_states[i] === 1;

    if (count % 2 !== 0) {
      bulb_state = !bulb_state;
    }

    if (bulb_state === false) {
      count++;
    }
  }

  return count;
}

console.log(bulbs([0, 1, 0, 1, 1, 0, 1, 1]));
