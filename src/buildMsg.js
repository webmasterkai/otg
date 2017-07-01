import { reduce } from 'lodash'
import { flow, map, set, sumBy } from 'lodash/fp'
import * as fieldFuncs from './message'

export const fieldOrder = [
  'position', // 8
  // 'sog', // 1
  // 'cog', // 1
  // 'speed', // 1
  // 'heading', // 1
  // 'waterDepth', // 1
  // 'waterTemp', // 1
  // 'windSpeed', // 1
  // 'windDirection', // 1
  // 'movementStatus', // 0.5
  // 'timeToNext', // 0.5
  // 'seaState', // 0.5
  // 'helpStatus', // 0.5
  // 'airTemp',
  // 'msg',
  // 'msg',
  // 'txt',
]
export function encodeField(props, funcs) {
  return id => funcs[id].endoe(props[id])
}

// Map fieldOrder to a new array of buffers.
export default function buildMessage(props) {
  // Check to make sure we have props for the entire message?
  // Use some default 0 value?
  return flow(
    map(encodeField(props, fieldFuncs)),
    buffs => Buffer.concat(buffs, sumBy('length', buffs))
  )(fieldOrder)
}
export function msgReducer(buff) {
  (res, val, id) => {
    const { _position } = res
    const { decode, size } = val
    return flow(
      set('_position', _position + size),
      set(id, decode())
    )
  }
}
export function hexBuff(hexString) {
  return new Buffer(hexString, 'hex')
}
export function decodeMessage(hexString) {
  return reduce(fieldOrder, msgReducer(hexBuff(hexString)), { _position: 0 })
}
