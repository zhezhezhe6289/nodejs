const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/weatherstack')

geocode('new taipei', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(25, 121.55, (error, data) => {
    console.log('error:', error)
    console.log('data:', data)
})