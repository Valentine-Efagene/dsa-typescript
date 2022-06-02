const canSum = require('./index').default

test("7, [2, 3]", () => {
  expect(canSum(7, [5, 3, 4, 7])).toBe(true)
})

test("7, [5, 3, 4, 7]", () => {
  expect(canSum(7, [5, 3, 4, 7])).toBe(true)
})

test("7, [2, 4]", () => {
  expect(canSum(7, [2, 4])).toBe(false)
})

test("8, [2, 3, 5]", () => {
  expect(canSum(8, [2, 3, 5])).toBe(true)
})

test("300, [7, 14]", () => {
  expect(canSum(300, [7, 14])).toBe(false)
})