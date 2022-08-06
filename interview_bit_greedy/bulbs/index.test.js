const bulbs = require('./index').default

test("[1, 0, 1] should give 2", () => {
  expect(bulbs([1, 0, 1])).toBe(2)
})

test("[0, 1, 0, 1, 1, 0, 1, 1] should give 6", () => {
  expect(bulbs([0, 1, 0, 1, 1, 0, 1, 1])).toBe(6)
})