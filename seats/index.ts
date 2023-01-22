/**
 * You are a traveller on a 2D grid. You begin in the top-left corner,
 * your goal is to travel to the bottom-right corner.
 * You may only move down or right.
 * 
 * In how many ways can you travel to the goal on the grid with
 * dimensions m * n
 **/

export default function seats(seats: string[]): number {
  const MOD = 1e6 + 7;
  console.log(MOD)

  // All the indices of xs
  const crosses = seats?.map(seat=>seat==='x')
  // Moved required, assuming starting position is 0
  //crosses = 

  return 0
}

seats([])
console.log(seats(['', '']))