const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization','auth-token'],
    credentials: true
}))
require('./db/conn')

app.use(express.json())
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})