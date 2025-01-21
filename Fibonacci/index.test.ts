import { fib } from './index';

describe('fibonacci function', () => {
  test("6, 8", () => {
    expect(fib(6)).toBe(8)
  })
})