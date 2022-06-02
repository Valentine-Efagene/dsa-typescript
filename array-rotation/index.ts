export function rotateLeft(list: number[], k: number) {
  const n = list.length
  const mod = k % n
  const rotated = new Array(list.length)

  for (let i = 0; i < n; i++) {
    rotated[i] = list[(mod + i) % n]
  }

  return rotated
}

export function rotateRight(list: number[], k: number) {
  const n = list.length
  const temp = list[n - 1]
  const rotated = new Array(list.length)

  for (let i = n - 1; i >= 0; i--) {
    rotated[i] = i === 0 ? temp : list[(i - 1 + n) % n]
  }

  return rotated
}

console.log(rotateRight([0, 1, 2, 3, 4], 1))