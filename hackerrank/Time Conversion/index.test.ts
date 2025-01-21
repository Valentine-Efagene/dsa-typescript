import { timeConversion } from './index';

describe('time conversion function', () => {
  test("first", () => {
    expect(timeConversion('12:01:00PM')).toBe('12:01:00')
  })
  test("second", () => {
    expect(timeConversion('12:01:00AM')).toBe('00:01:00')
  })
  test("second", () => {
    expect(timeConversion('07:05:45PM')).toBe('19:05:45')
  })
  test("second", () => {
    expect(timeConversion('07:05:45AM')).toBe('07:05:45')
  })
})