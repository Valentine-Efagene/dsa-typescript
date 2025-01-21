import { findMedian } from './index';

describe('time conversion function', () => {
  test("first", () => {
    expect(findMedian([5, 3, 1, 2, 4])).toBe(3)
  })
})