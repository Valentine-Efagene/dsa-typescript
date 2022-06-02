const gridTraveller = require('./index').default

test("1, 1", () => {
  expect(gridTraveller(1, 1)).toBe(1)
})