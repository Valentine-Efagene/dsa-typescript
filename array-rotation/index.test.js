const { catalan } = require('./index')

test("", () => {
  expect(Math.round(catalan(6))).toBe(132)
});

test("", () => {
  expect(Math.round(catalan(9))).toBe(4862)
});