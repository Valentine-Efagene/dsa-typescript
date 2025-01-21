/*
 *
 */

export function timeConversion(str: string): string {
  const meridian = str.slice(-2)
  const MAX = 12
  const time = str.slice(0, 8)

  let [h, m, s] = time.split(':')
  let hr = parseInt(h)

  if (hr === MAX) {
    hr = (meridian === 'PM') ? MAX : 0
  } else {
    hr = (meridian === 'PM') ? (hr + MAX) % 24 : hr
  }

  return `${hr < 10 ? '0' : ''}${hr}:${m}:${s}`
}