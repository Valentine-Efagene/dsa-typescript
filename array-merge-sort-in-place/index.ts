/*
 * This implementation borrows ideas from Introduction to Algorithms, Cormen et al, Section 2.3.1
 *
 */
function merge(array: number[], start: number, middle: number, end: number) {
  const leftArray = array.slice(start, middle)
  const rightArray = array.slice(middle, end)

  let i = 0, j = 0

  for (let k = start; k < end; k++) {
    if (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] <= rightArray[j]) {
        array[k] = leftArray[i]
        i++
      } else {
        array[k] = rightArray[j]
        j++
      }
    } else if (i < leftArray.length) {
      array[k] = leftArray[i]
      i++
    } else if (j < rightArray.length) {

      array[k] = rightArray[j]
      j++
    }
  }
}

// Right gets the bigger share because of the way slice works (it excludes 'end')
function mergeSort(array: number[], start: number, end: number) {
  if (end - start <= 1) return

  const middle = Math.floor((start + end) / 2)
  mergeSort(array, start, middle)
  mergeSort(array, middle, end)
  merge(array, start, middle, end)
}

const array = [4, 3, 6, 7, 8, 3]
const N = array.length
mergeSort(array, 0, N)
console.log(array)