/* globals describe test expect */
import buildMessage from './buildMsg'

const props = {
  position: [-73.9524034, 37.2404432],
}

describe('buildMessage', () => {
  test('Takes props and returns buffer.', () => {
    expect(buildMessage(props).toString('hex'))
    .toMatch('c293e7a14214f637')
  })
})
