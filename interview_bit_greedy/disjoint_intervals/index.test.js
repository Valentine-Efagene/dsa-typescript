const solution = require('./index').default

test("[[1, 2], [2, 10], [4, 6]] should give 2", () => {
  expect(solution([
    [1, 2],
    [2, 10],
    [4, 6],
  ])).toBe(2)
})

test("[[1, 4], [2, 3], [4, 6], [8, 9]] should give 2", () => {
  expect(solution([[1, 4], [2, 3], [4, 6], [8, 9]])).toBe(3)
})