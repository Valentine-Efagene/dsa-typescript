import { solution } from './index';

describe('time conversion function', () => {
  test("first", () => {
    expect(solution([2, 3, 5, 1, 4])).toStrictEqual([1, 2, 5, 4, 3])
  })
  test("second", () => {
    expect(solution([2, 3, 5, 1, 4, 6, 7])).toStrictEqual([1, 2, 3, 7, 6, 5, 4])
  })
})