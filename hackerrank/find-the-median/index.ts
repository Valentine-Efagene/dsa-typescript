/*
 *
 */

export function findMedian(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  // Step 1: Sort the array
  const sortedArray = [...arr].sort((a, b) => a - b);

  // Step 2: Find the median
  const midIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    // Even number of elements, average the two middle numbers
    return (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
  } else {
    // Odd number of elements, return the middle number
    return sortedArray[midIndex];
  }
}