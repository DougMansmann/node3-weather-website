const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiZGptYW5zbWFubiIsImEiOiJjbTl1MW1hY3MwNTB5Mmpwc2c2Y3Y3eDI5In0.fqVaBHy1C0of9TC15heTyw&limit=1'
    request({url, json: true}, (error, {body}) => {
        
        if (error) {
            callback('Unable to connect location services!', undefined)
        } else if (!body.features[0]) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].properties.coordinates.latitude,
                longitude: body.features[0].properties.coordinates.longitude,
                location: body.features[0].properties.full_address
            })
        }
    })
}

module.exports = geocode