const url = 'http://localhost:3000/weather?address=boston'
fetch(url).then((response) => {
    response.json().then((data) => {
        try {
            console.log(data.location)
            console.log(data.forecast)
        } catch (error) {
            console.log(data.error)
        }
    })
})