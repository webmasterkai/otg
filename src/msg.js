
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
