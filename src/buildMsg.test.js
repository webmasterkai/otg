/* globals describe test expect */
import { decodeMessage, encodeMessage } from './buildMsg'

const props = {
  position: [-73.9524034, 37.2404432],
}
const result = {
  position: [-73.95240020751953, 37.24044418334961],
}

describe('encodeMessage', () => {
  test('Takes props and returns buffer.', () => {
    expect(encodeMessage(props).toString('hex'))
    .toMatch('c293e7a14214f637')
  })
})
describe('decodeMessage', () => {
  test('Takes hex string and returns props object.', () => {
    expect(decodeMessage('c293e7a14214f637'))
    .toMatchObject(result)
  })
})
