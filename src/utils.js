import { round } from 'lodash'

// Returns position.
export function decodePosition(buf) {
  return [buf.readFloatBE(0), buf.readFloatBE(4)]
}
export function encodePosition([pos1, pos2]) {
  const buf = Buffer.allocUnsafe(8)
  buf.writeFloatBE(pos1, 0)
  buf.writeFloatBE(pos2, 4)
  return buf
}
export function decodeHalfByte(hex) {
  return [parseInt(hex[0], 16), parseInt(hex[1], 16)]
}
export function encodeHalfByte([first, second]) {
  return Buffer.from(first.toString(16) + second.toString(16), 'hex')
}
export function fraction(ordinal) {
  return (hex) => {
    const buf = Buffer.from(hex, 'hex')
    return round((buf.readUInt8() / ordinal), 1)
  }
}
export function multiple(multiplier) {
  return (num) => {
    const maxVal = 255 / multiplier
    const buf = Buffer.allocUnsafe(1)
    if (num > maxVal) return buf.writeUInt8(255, 0)
    return buf.writeUInt8(Math.round(num * multiplier), 0)
  }
}
export const fourth = fraction(4)
export const quadruple = multiple(4)
export const fifth = fraction(5)
export const quintuple = multiple(5)
export const sixth = fraction(6)
export const sextuple = multiple(6)
export const fifteenth = fraction(15)
export const fifteenfold = multiple(15)
export const sixteenth = fraction(16)
export const sixteenfold = multiple(16)

export const deg8bit = 359 / 255
export function decodeDegrees(hex) {
  const buf = Buffer.from(hex, 'hex')
  const number = buf.readUInt8()
  const float = deg8bit * number
  return Math.round(float)
}
export function encodeDegrees(degrees) {
  const float = degrees / deg8bit
  const number = Math.round(float)
  const buf = Buffer.allocUnsafe(1)
  return buf.writeUInt8(number, 0)
}
