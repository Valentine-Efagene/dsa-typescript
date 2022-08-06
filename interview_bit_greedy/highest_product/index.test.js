const solution = require('./index').default

test("[1, 2, 3, 4] should give 24", () => {
  expect(solution([1, 2, 3, 4])).toBe(24)
})

test("[0, -1, 10, 7, 5] should give 350", () => {
  expect(solution([0, -1, 10, 7, 5])).toBe(350)
})