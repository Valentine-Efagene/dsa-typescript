import { func } from './index';

describe('function', () => {
  test("first", () => {
    expect(func([1, 1, 3, 2, 1])).toEqual([...[0, 3, 1, 1], ...Array(96).fill(0)])
  })
})