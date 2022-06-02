const missingInteger = require('./index').default

test("[-1, -4, 0, 2, 3, 4]", () => {
  expect(missingInteger([-1, -4, 0, 2, 3, 4])).toBe(1)
});

test("[1, 2, 3, 4]", () => {
  expect(missingInteger([1, 2, 3, 4])).toBe(5)
});