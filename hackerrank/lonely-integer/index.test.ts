import { loneInteger } from './index';

describe('time conversion function', () => {
  test("first", () => {
    expect(loneInteger([1, 2, 3, 4, 3, 2, 1])).toBe(4)
  })
})