const change = require('./index').default

test("4, [1, 2]", () => {
  expect(change(4, [1, 2])).toBe(3)
})