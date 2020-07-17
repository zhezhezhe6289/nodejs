const request = require('postman-request')
const fs = require('fs')

// // weather API
// const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=25,121.55'

// request({ url:url }, (error, response, body) => {
//     const data = JSON.parse(response.body)
//     if (error) {
//         console.log('Unable to connect to internet')
//     } else if (data.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(data.current.weather_descriptions[0] + '. It is currently', data.current.temperature, 'degrees' + ', but it feels like', data.current.feelslike, 'degrees')
//     }
// })

// // Geocoding
// const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/taiwan.json?access_token=pk.eyJ1IjoiZXVnZW5lY2h1YSIsImEiOiJja2NvZGV6a2swazQzMnBxcnB4eHdjODY3In0.vc0z_GSJlFem05vMTkgWpQ&limit=1'

// request({ url:urlMapBox }, (error, response, body) => {
//     const data = JSON.parse(response.body)
//     if (error) {
//         console.log('Unable to connect to internet')
//     } else if (data.features.length === 0) {
//         console.log('Unable to find location. Try another search')
//     } else {
//         const latitude = data.features[0].center[1]
//         const longitude = data.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXVnZW5lY2h1YSIsImEiOiJja2NvZGV6a2swazQzMnBxcnB4eHdjODY3In0.vc0z_GSJlFem05vMTkgWpQ&limit=1'

    request({ url:url }, (error, response) => {
        if (error) {
            callback('Unable to connect to internet', undefined)
        }
        if (response) {
            const data = JSON.parse(response.body)
            if (data.features.length === 0) {
                callback('Unable to find location. Try another search', undefined)
            } else {
                const latitude = data.features[0].center[1]
                const longitude = data.features[0].center[0]
                const location = data.features[0].place_name
                callback(undefined, {
                    latitude: latitude,
                    longitude: longitude,
                    location: location 
                })
            }
        }
    })
}

geocode('taiwan', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    // const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=25,121.55'
    const url = 'http://api.weatherstack.com/current?access_key=6a9b17fd8433fba05cc6be90dba24b1a&query=' + data.latitude + ',' + data.longitude

    request({ url:url }, (error, response, body) => {
        const data = JSON.parse(response.body)
        if (error) {
            console.log('Unable to connect to internet')
        } else if (data.error) {
            console.log('Unable to find location')
        } else {
            console.log('weatherstack Location: ', data.location.country)
            console.log(data.current.weather_descriptions[0] + '. It is currently', data.current.temperature, 'degrees' + ', but it feels like', data.current.feelslike, 'degrees')
        }
    })
})