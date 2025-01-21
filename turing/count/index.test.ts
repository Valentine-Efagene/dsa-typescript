import { solutionChatGpt as solution } from './index';

describe('time conversion function', () => {
  test("first", () => {
    expect(solution(
      [
        [1, 0, 2],
        [1, 0, 2],
      ]
    )).toBe(0)
  })
  test("second", () => {
    expect(solution(
      [
        [1],
        [2],
        [3],
      ]
    )).toBe(2)
  })
  test("third", () => {
    expect(solution(
      [
        [1, 1, 2],
        [1, 2, 2],
        [3, 3, 3],
      ]
    )).toBe(5)
  })
})