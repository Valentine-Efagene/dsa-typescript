/*
 * For your reference:
 *
 */
function merge(leftArray: number[], rightArray: number[]) {
  const output = []
  let leftIndex = 0, rightIndex = 0

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    const leftEl = leftArray[leftIndex]
    const rightEl = rightArray[rightIndex]

    if (leftEl < rightEl) {
      output.push(leftEl)
      leftIndex++
    } else {
      output.push(rightEl)
      rightIndex++
    }
  }

  return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]
}

export default function mergeSort(array: number[]) {
  if (array.length <= 1) return array

  const middleIndex = Math.floor(array.length / 2)
  const leftArray = array.slice(0, middleIndex)
  const rightArray = array.slice(middleIndex)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}


const array = [4, 3, 6, 7, 8, 3]
console.log(mergeSort(array))