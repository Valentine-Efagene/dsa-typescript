/**
 * You have a 2D array of integers. For each modification, you can change the value of any element
 * Count the number of modifications to satisfy
 * 1. The element to the right is not same as the element
 * 2. The element under is same
 * 
 * @param column 
 */

function getModal(column: number[], ignore: number[]): number | null {
  const freqMap = {}
  let mode: number = null
  let maxFreq = 0


  for (const x of column) {
    if (ignore.includes(x)) {
      freqMap[x] = 0
      continue
    }

    freqMap[x] = freqMap[x] ? freqMap[x] + 1 : 1

    if (freqMap[x] > maxFreq) {
      mode = x
    }
  }

  return mode
}

function solution(array: number[][]) {
  const modals = []
  let modifications = 0

  for (let i = 0; i < array[0].length; i++) {
    const column: number[] = []

    for (let j = 0; j < array.length; j++) {
      column.push(array[j][i])
    }

    const mode = getModal(column, modals)

    if (mode == null) {
      modifications += column.length
      continue
    } else {
      modals.push(mode)
      const count = column.reduce((acc, curr) => acc + (curr === mode ? 0 : 1), 0)
      modifications += count
    }
  }

  return modifications
}

function solutionChatGpt(grid: number[][]): number {
  let modifications = 0;
  const rows = grid.length;
  const cols = grid[0]?.length || 0;

  if (rows === 0 || cols === 0) return 0; // Handle edge case for empty grid

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check the element to the right
      if (j < cols - 1 && grid[i][j] === grid[i][j + 1]) {
        // Increment modifications and change the next element
        modifications++;
        grid[i][j + 1] = grid[i][j] + 1; // Modify to a different value
      }

      // Check the element below
      if (i < rows - 1 && grid[i][j] !== grid[i + 1][j]) {
        // Increment modifications and align the below element
        modifications++;
        grid[i + 1][j] = grid[i][j]; // Modify to match the current element
      }
    }
  }
  console.log(grid)

  return modifications;
}


export { solution, solutionChatGpt }