import { solution } from './index';

describe('time conversion function', () => {
  test("first", () => {
    expect(solution('bcbc')).toBe(0)
  })

  test("second", () => {
    expect(solution('acbbuca')).toBe(4)
  })
})