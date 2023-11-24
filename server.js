const express = require('express')
const cors = require('cors')
const bodyPareser = require('body-parser')





//init app 
const app = express()
const port = process.env.PORT || 3000

//configration env
require('dotenv').config({path:'./config.env'})

app.use(express.json())
app.use(cors())
app.use(bodyPareser())
app


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))