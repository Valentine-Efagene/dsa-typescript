const solution = require('./index').default

test("A = [1, 3, 2], B = 1 should give [3, 1, 2]", () => {
  expect(solution([1, 3, 2], 1)).toStrictEqual([3, 1, 2])
})

test("A = [1, 2, 3, 4], B = 1 should give [4, 2, 3, 1]", () => {
  expect(solution([1, 2, 3, 4], 1)).toStrictEqual([4, 2, 3, 1])
})

test("A = [3, 2, 4, 1, 5], B = 3 should give [3, 2, 4, 1, 5]", () => {
  expect(solution([3, 2, 4, 1, 5], 3)).toStrictEqual([5, 4, 3, 1, 2])
})