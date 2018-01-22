const path = require('path')
const jwt = require('jsonwebtoken')

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','index.html'))
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/authenticate', (req, res) => {
    res.json({
        token: jwt.sign({ login: 'examplelogin', nonce: Math.random() }, 'mySecret'),
    })
})

app.listen(3000, () => console.log('Started Listening on port 3000!'))
