
// 1 msgType, wind
// 1 seaState, sog
// 4 gps
// 4 waypoint

// 1 bit - 2 patterns
// 2 bits - 4
// 3 bits - 8
// 4 bits - 16
// 5 bits - 32
// 6 bits - 64
// 7 bits - 128
// 8 bits - 256 - one byte

export const msgType = {
  length: 1,
  values: [
    '50 byte text message',
    'Compressed info message.',
  ],
}
export const windDirection = {
  description: 'Wind direction 3 bits. 8 directions',
  length: 3,
  values: {
    '000': 'North',
    '001': 'North East',
    '010': 'East',
    '011': 'South East',
    '100': 'South',
    '101': 'South West',
    '110': 'West',
    '111': 'North West',
  },
}

export const windSpeed = {
  length: 6,
  description: '0-64. speed in kts. 8 bit uint.',
}
export const seaState = {
  description: 'World Meteorological Organization sea state code',
  length: 3,
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

export const boatSpeedOverGround = {
  description: 'Boat speed in half knot increments.',
  tech: 'Turn into 8 bit uint. Take number and devide by half.',
  length: 5,
  values: [
    '0 knots. Not getting anywhere anytime soon.',
    '0.5 knots.',
    '1 knots.',
    '1.5 knots.',
    '2 knots.',
    '2.5 knots.',
    '3 knots.',
    '3.5 knots.',
    '4 knots.',
    '4.5 knots.',
    '5 knots.',
    '5.5 knots.',
    '6 knots.',
    '6.5 knots.',
    '7 knots.',
    '7.5 knots.',
    '8 knots.',
  ],
}
export const windStrength = {
  description: 'Wind speed in Beaufort.',
  length: 4,
  values: [
    'Force 0. Calm. < 1 knot.',
    'Force 1. Light Air. 1–3 knots.',
    'Force 2. Light breeze. 4–6 knots.',
    'Force 3. Gentle breeze. 7–10 knots.',
    'Force 4. Moderate breeze. 11–16 knots.',
    'Force 5. Fresh breeze. 17–21 knots.',
    'Force 6. Strong breeze. 22–27 knots.',
    'Force 7. High wind, moderate gale, near gale. 28–33 knots.',
    'Force 8. Gale, fresh gale. 34–40 knots.',
    'Force 9. Strong/severe gale. 41–47 knots.',
    'Force 10. Storm, whole gale. 48–55 knots.',
    'Force 11. Violent storm. 56–63 knots.',
    'Force 12. Hurricane force. ≥ 64 knots.',
    'Code 13. Wind not available.',
    'Code 14.',
    'Code 15',
  ],
}
export const nextLocationType = {
  length: 2,
  values: {
    '00': 'Next route waypoint.',
    '01': 'Temporary stop.',
    '10': 'Destination.',
    '11': 'Previous route waypoint.',
  },
}
