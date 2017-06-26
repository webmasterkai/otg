/* globals describe test expect */
import { encodeHalfByte, decodeHalfByte } from './utils'

describe('encodeHalfByte', () => {
  test('Two four bit numbers in array', () => {
    expect(encodeHalfByte([4, 11]))
    .toMatchObject(Buffer.from('4b', 'hex'))
  })
})
describe('decodeHalfByte', () => {
  test('Take hex string and make array of two parts. Numbers.', () => {
    expect(decodeHalfByte('4b'))
    .toMatchObject([4, 11])
  })
})
