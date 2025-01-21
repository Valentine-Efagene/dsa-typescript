import { func } from './index';

describe('time conversion function', () => {
  test("first", () => {
    expect(func(
      [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
      ]
    )).toBe(2)
  })
})