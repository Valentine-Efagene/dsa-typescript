const editDistance = require('./index').default

test("", () => {
  const str1 = "MARCH"
  const str2 = "CART"
  const result = editDistance(str1, str2, str1.length, str2.length)
  const target = 3
  expect(result).toBe(target)
})