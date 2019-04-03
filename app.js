const express = require('express')
const PORT = 3000
const app = express()

const hello = require('./src/hello')

app.get('/', (req, res) => {
    const text = hello()
    res.send(text)
})

app.listen(PORT, () => { console.log(`Server running at port ${PORT}`) })