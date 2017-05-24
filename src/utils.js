import { round } from 'lodash'

// Returns position.
export function decodePosition(hex) {
  const buf = Buffer.from(hex, 'hex')
  return [buf.readFloatBE(0), buf.readFloatBE(4)]
}
export function encodePosition({ latitude, longitude }) {
  const buf = Buffer.allocUnsafe(8)
  buf.writeFloatBE(longitude, 0)
  buf.writeFloatBE(latitude, 4)
  return buf
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
export const 
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
