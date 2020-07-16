const request = require('postman-request')
const fs = require('fs')

const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=25,121.55'

request({ url:url }, (error, response, body) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})