const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1> Hello hello hello? </h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'eugene',
        age: 28
    }])
})

app.get('/about', (req, res) => {
    res.send('<h3> About Me </h3>')
})

app.get('/weather', (req, res) => {
    res.send([
        {
            forecast: 'its currently raining',
            location: 'New Taipei'
        }
    ])
})

app.listen(3000, '127.0.0.1', () => {
    console.log('伺服器已啟動 port 為 3000' + 3000)
})



