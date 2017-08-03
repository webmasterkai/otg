import { over }
// 115 STNG Converter
// 130 RS130 GPS

export const getPos = get('data.data.130.129025.fields')
export const getLat = flow(getPos, get('latitude'))
export const getLon = flow(getPos, get('longitude'))

export const getPosArr = over([getLon, getLat]) (state) {

}

export const selector = {
  'position': getPositionArray,
}

'data.data.130.129025.fields.latitude'
'data.data.130.129025.fields.longitude'
'data.data.130.129026.fields.cog'
'data.data.130.129026.fields.sog'

export const getHeading = '115.127250.fields.'
