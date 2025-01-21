function getPowerSet(arr) {

  const len = arr.length;
  const total = 1 << len;
  const global = []

  for (let i = 0; i < total; i++) {
    const local = []

    for (let j = 0; j < len; j++) {
      if ((i & (1 << j)) != 0) {
        local.push(arr[j])
      }
    }

    global.push(local)
  }

  return global
}


var solution = function (digits: string, num: string) {
  let i = 1
  let n = 0

  while (i < num.length - 1) {
    n += Math.abs(digits.indexOf(num[i]) - digits.indexOf(num[++i]))
  }

  return n
}

console.log(solution("0123456789", "210"))