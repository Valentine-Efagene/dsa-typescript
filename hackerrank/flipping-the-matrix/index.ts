/*
 *The problem described in the image involves a matrix manipulation game where the goal is to maximize the sum of elements in the upper-left n×nn×n submatrix of a 2n×2n2n×2n matrix by reversing rows or columns. Here's how you can approach solving it programmatically:
Algorithm to Solve the Problem

    Understand the Quadrant Selection:
        For a 2n×2n matrix, focus only on the top-left n×n quadrant.
        To maximize the sum, for each position in this quadrant, consider all four possible values:
            Current position.
            Reflected across the horizontal axis.
            Reflected across the vertical axis.
            Reflected diagonally (both axes).

    Iterate Over the Quadrant:
        For each cell in the n×nn×n quadrant (index (i,j)(i,j)), calculate the maximum of these four values.

    Sum the Maximum Values:
        Accumulate the maximum values for all positions in the n×nn×n quadrant.


    This is based on the fact that reflections are disjoint
 */

export function func(matrix: number[][]): number {
  const n = matrix.length / 2; // Half the size of the matrix
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Calculate the maximum value for the current position considering all reflections
      const maxValue = Math.max(
        matrix[i][j],                                   // Original position
        matrix[i][2 * n - j - 1],                       // Reflected across vertical axis
        matrix[2 * n - i - 1][j],                       // Reflected across horizontal axis
        matrix[2 * n - i - 1][2 * n - j - 1]            // Reflected diagonally
      );
      maxSum += maxValue;
    }
  }

  return maxSum;
}