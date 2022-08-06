const maximize = require('./index').default

test("[5, 7, 9, 21, 34] => [9, 21, 5, 34, 7]", () => {
  expect(maximize([5, 7, 9, 21, 34])).toBe([9, 21, 5, 34, 7])
});