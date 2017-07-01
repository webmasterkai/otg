import {
  decodePosition, encodePosition,
  fourth, quadruple,
  fifth, quintuple,
  sixth, sextuple,
  sixteenth, sixteenfold,
  encodeDegrees, decodeDegrees,
} from './utils'

// POSITION
export const position = {
  description: 'GPS Coordinates. Lon 32 bit float. Lat 32 bit float.',
  decode: decodePosition,
  encode: encodePosition,
  size: 8,
  bits: 64,
  required: true,
}

// SPEED OVER GROUND - 16 MAX
export const sog = {
  description: 'Speed over ground. Divide by 16.',
  decode: sixteenth,
  encode: sixteenfold,
  size: 1,
  bits: 8,
  required: true,
}
export const cog = {
  description: 'Course over ground. True.',
  decode: decodeDegrees,
  encode: encodeDegrees,
  size: 1,
  bits: 8,
  required: true,
}
export const speed = {
  description: 'Speed through the water.',
  decode: sixteenth,
  encode: sixteenfold,
  size: 1,
  bits: 8,
}

export const heading = {
  length: 8,
  description: 'Heading. Direction pointed. True.',
}
export const waterDepth = {
  description: 'Water depth. (63m max)',
  decode: fourth,
  encode: quadruple,
  size: 1,
  bits: 8,
}
export const waterTemp = {
  size: 1,
  description: 'water temp in C. Number. 1/6',
  decode: sixth,
  encode: sextuple,
}
export const windSpeed = {
  description: 'Wind speed in kts.',
  decode: fourth,
  encode: quadruple,
  size: 1,
  bits: 8,
}
export const windDirection = {
  description: 'Direction wind is coming from.',
  decode: decodeDegrees,
  encode: encodeDegrees,
  size: 1,
  bits: 8,
}
export const airTemp = {
  description: 'Air temp. Degrees c. 1/5',
  decode: fifth,
  encode: quintuple,
  size: 1,
}
export const houseVoltage = {
  description: 'Divide by 25 add 8.',
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
    'Reserved - Towing.',
    'Reserved - Being towed.',
    'Drifting around, hove to, pulling a drogue, or intentionally making little forward progress.',
    'Motor sailing.',
    'Reserved',
    'AIS-SART is active',
    'Not defined',
  ],
}

export const timeToNext = {
  description: 'Time to expected next message.',
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

export const seaState = {
  description: 'World Meteorological Organization sea state code',
  length: 4,
  values: [
    'WMO 1. 0.0 to 0.1 metres (0.00 to 0.33 ft). Calm.',
    'WMO 2. 0.1 to 0.5 metres (3.9 in to 1 ft 7.7 in). Smooth (wavelets).',
    'WMO 3. 0.5 to 1.25 metres (1 ft 8 in to 4 ft 1 in). Slight waves.',
    'WMO 4. 1.25 to 2.5 metres (4 ft 1 in to 8 ft 2 in). Moderate waves.',
    'WMO 5. 2.5 to 4 metres (8 ft 2 in to 13 ft 1 in). Rough.',
    'WMO 6. 4 to 6 metres (13 to 20 ft). Very rough',
    'WMO 7. 6 to 9 metres (20 to 30 ft). High',
    'WMO 8. 9 to 14 metres (30 to 46 ft). Very high',
  ],
}
export const helpStatus = {
  length: 4,
  values: [
    'Everything under control.',
    'We have everything more or less under control.',
    'We are requesting help from friends.',
    'We are requesting help from locals.',
    'We are requesting help from the coast guard.',
    'We have help on the way. In contact with them.',
    'Still waiting for help.',
    'Help is here.',
    'We need help and have not found it yet. Please coordinate with authorities.',
    'Help has left. Back on our way.',
  ],
}
// byte 11 used

// byte 12 used.

// Estimated time to next waypoint

// byte 13 used.
// 14
export const atmosphericPressure = {
  length: 8,
  description: 'divide by 2, add 950.',
}
// 15

export const acPowerIn = {
  length: 1,
  description: 'Generator or Shore power',
}
export const engineOn = {
  length: 1,
  description: 'Engine is on/off.',
}
// 16

// 17
// The rest is just text?
