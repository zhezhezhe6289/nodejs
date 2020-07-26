const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

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



