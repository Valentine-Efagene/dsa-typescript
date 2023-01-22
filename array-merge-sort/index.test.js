const { default: seats } = require("./index");

test("1, 1", () => {
  expect(seats(["", ""])).toBe(1);
});
