const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
app.use(cors())
require('./db/conn')

app.use(express.json())
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})