const gridTraveller = require('./index').default

test("1, 1", () => {
  expect(gridTraveller(1, 1)).toBe(1)
})

test("2, 3", () => {
  expect(gridTraveller(2, 3)).toBe(3)
})

test("3, 2", () => {
  expect(gridTraveller(3, 2)).toBe(3)
})

test("3, 3", () => {
  expect(gridTraveller(3, 3)).toBe(6)
})

test("18, 18", () => {
  expect(gridTraveller(18, 18)).toBe(2333606220)
})