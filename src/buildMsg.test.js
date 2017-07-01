/* globals describe test expect */
import { decodeMessage, encodeMessage } from './buildMsg'

const props = {
  cog: 32.2,
  position: [-73.9524034, 37.2404432],
  sog: 3.48,
}
const result = {
  cog: 32,
  position: [-73.95240020751953, 37.24044418334961],
  sog: 3.5,
}

describe('encodeMessage', () => {
  test('Takes props and returns buffer.', () => {
    expect(encodeMessage(props).toString('hex'))
    .toMatch('c293e7a14214f6376817')
  })
})
describe('decodeMessage', () => {
  test('Takes hex string and returns props object.', () => {
    expect(decodeMessage('c293e7a14214f6376817'))
    .toMatchObject(result)
  })
})
