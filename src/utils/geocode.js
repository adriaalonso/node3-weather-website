const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRyaWExOTkxIiwiYSI6ImNranQwc2RldjN1OTcyc3Fva2NxdDJvNXkifQ.fm2UkuLoS2NRIAlfsNsHng'

    request( { url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect with location server', undefined)
        } else if (body.features.length == 0) {
            callback('Provide a valid location', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lon: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode