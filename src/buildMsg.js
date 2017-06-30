import {
  position, sog, cog, speed, heading, waterDepth, waterTemp,
  windSpeed, windDirection, movementStatus, timeToNext
} from './message'

export const fieldOrder = [
  'position', // 8
  'sog', // 1
  'cog', // 1
  'speed', // 1
  'heading', // 1
  'waterDepth', // 1
  'waterTemp', // 1
  'windSpeed', // 1
  'windDirection', // 1
  'movementStatus', // 0.5
  'timeToNext', // 0.5
  // 'seaState', // 0.5
  // 'helpStatus', // 0.5
  // 'airTemp',
  'msg',
  'msg',
  'txt',
]

export default function buildMessage(props) {
  return position
}
