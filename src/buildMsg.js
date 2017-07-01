import { get, map, reduce } from 'lodash'
import { flow, set, sumBy } from 'lodash/fp'
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
export const fields = map(fieldOrder, id => set('id', id)(get(fieldFuncs, id)))

// Send it a props object and get back a buffer.
export function encodeMessage(props) {
  // Check to make sure we have props for the entire message?
  // Use some default 0 value?
  // Map known fields to an array of buffers.
  const buffs = map(fields, ({ encode, id }) => encode(props[id]))
  // Return joined array of buffs.
  return Buffer.concat(buffs, sumBy('length', buffs))
}

// DECODE

export function msgReducer(buff) {
  return (res, fieldInfo) => {
    const { decode, id, size } = fieldInfo
    const start = res.buffPos
    const end = start + size
    return flow(
      set('buffPos', end),
      set(id, decode(buff.slice(start, end)))
    )(res)
  }
}
export function hexBuff(hexString) {
  return new Buffer(hexString, 'hex')
}
export function decodeMessage(hexString) {
  return reduce(fields, msgReducer(hexBuff(hexString)), { buffPos: 0 })
}
