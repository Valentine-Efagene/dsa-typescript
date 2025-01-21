import { func } from './index';

describe('time conversion function', () => {
  test("first", () => {
    expect(func([[1, 2,], [3, 4]])).toBe(4)
  })
})