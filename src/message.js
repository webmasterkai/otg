import {
  decodePosition, encodePosition,
  fourth, quadruple,
  fifth, quintuple,
  sixteenth, sixteenfold,
  encodeDegrees, decodeDegrees,
} from './utils'

// POSITION
export const position = {
  description: 'GPS Coordinates. Lon 32 bit float. Lat 32 bit float.',
  decode: decodePosition,
  encode: encodePosition,
  size: 8,
}

// SPEED - 16 MAX
export const sog = {
  description: 'Speed over ground. Divide by 16.',
  decode: sixteenth,
  encode: sixteenfold,
  size: 1,
}

export const cog = {
  description: 'number * 1.4117647059. 360/255',
  decode: decodeDegrees,
  encode: encodeDegrees,
  size: 1,
}
export const waterDepth = {
  description: 'Depth in 1/4 meters. 8 bits (63m max)',
  decode: fourth,
  encode: quadruple,
  size: 1,
}
export const windSpeed = {
  description: 'Wind speed in kts.',
  decode: fourth,
  encode: quadruple,
  size: 1,
}
export const windDirection = {
  description: 'number * 1.4117647059. 360/255',
  decode: decodeDegrees,
  encode: encodeDegrees,
  size: 1,
}
export const airTemp = {
  description: 'Air temp. Degrees c. 1/5',
  decode: fifth,
  encode: quintuple,
  size: 1,
}

export const movementStatus = {
  length: 4,
  values: [
    'Under way using engine.',
    'At anchor.',
    'Not under command.',
    'Restricted manoeuverability',
    'Constrained by her draught',
    'Moored',
    'Aground',
    'Engaged in Fishing',
    'Under way sailing',
    'Reserved',
    'Reserved',
    'Drifting around, hove to, pulling a drogue, or intentionally making little forward progress.',
    'Motor sailing.',
    'Reserved',
    'AIS-SART is active',
    'Not defined',
  ],
}

export const timeToNext = {
  description: 'Time to or from the 2nd location.',
  length: 4,
  values: [
    'Less than 15 minutes.',
    '15 to 30 minutes.',
    '30 minutes to 1 hour.',
    '1 to 2 hours.',
    '2 to 4 hours.',
    '4 to 6 hours.',
    '6 to 12 hours.',
    '12 to 18 hours.',
    '1 day.',
    '2 days.',
    '3 days.',
    '4 days.',
    '5 days.',
    '6 days.',
    '1 to 2 weeks.',
    'More than 2 weeks.',
  ],
}

// byte 11 used

// byte 12 used.

// Estimated time to next waypoint

export const helpStatus = {
  length: 2,
  values: [
    'We have everything more or less under control.',
    'We are requesting help elsewhere.',
    'We have help on the way. In contact with them.',
    'We need help and have not found it yet. Please coordinate with authorities.',
  ],
}
// byte 13 used.
export const heading = {
  length: 8,
  description: 'number * 1.4117647059. 360/255',
}
// 14
export const atmosphericPressure = {
  length: 8,
  description: 'divide by 2, add 950.',
}
// 15
export const waterTemp = {
  size: 1,
  description: 'water temp in C. Number. 1/6',
}
export const acPowerIn = {
  length: 1,
  description: 'Generator or Shore power',
}
export const engineOn = {
  length: 1,
  description: 'Engine is on/off.',
}
// 16
export const batteryVoltage = {
  length: 6,
  description: 'Voltage 6 bits. divide by 10 add 11. 10.6-17v 0.1 each.',
}
// 17
// The rest is just text?
