const lat = 26.523486667
const lon = -76.976583167
const buf = Buffer.allocUnsafe(4)
buf.writeFloatBE(lat, 0)
console.log(buf)

const buf2 = Buffer.allocUnsafe(4)
buf2.writeFloatBE(lon, 0)
console.log(buf2)

const val1 = Buffer.from('41d4301a', 'hex')
console.log(lat)
console.log(val1.readFloatBE())

const val2 = Buffer.from('c299f403', 'hex')
console.log(lon)
console.log(val2.readFloatBE())
