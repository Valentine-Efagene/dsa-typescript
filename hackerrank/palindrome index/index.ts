
function removeCharacterAt(str: string, index: number) {
  const array = str.split('')
  array.splice(index, 1)
  return array.join('')
}

function isPalindrome(str: string): boolean {
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== str[str.length - index - 1]) {
      return false
    }
  }

  return true
}

export function solution(str: string): number {
  if (isPalindrome(str)) {
    return -1
  }

  for (let index = 0; index < str.length; index++) {
    const reduced = removeCharacterAt(str, index)

    if (isPalindrome(removeCharacterAt(str, index))) {
      return index
    }
  }

  return -1
}