const request = require('request')

const forecast = (lat, lon, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=cd9df6db117ecaabb45a4e8244f33266&query='+lat+','+lon

    request( { url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect with weather service', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The temperature is ' + body.current.temperature + ' degrees and it feels like ' + body.current.feelslike + '. The wind speed is ' + body.current.wind_speed + ' and the humidity has the value of ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast