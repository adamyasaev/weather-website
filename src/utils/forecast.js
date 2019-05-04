const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/26bb9f2631bcfffb30c11afaa61c2feb/' + latitude + ',' + longitude + '?units=ca&lang=en'
    
    request ({ url, json: true }, (error, { body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Please specify a valid location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary}. It is currently ${body.currently.temperature} degrees outside. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast