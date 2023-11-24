const express = require('express')
const cors = require('cors')
const bodyPareser = require('body-parser')
const authRouter = require('./Router/authRoute')
const connectionDB = require('./config/DB')

//connection with DB

connectionDB();


//init app 
const app = express()
const port = process.env.PORT || 5000

//configration env
require('dotenv').config({path:'./config.env'})

// apply middleware
app.use(express.json())
app.use(cors())

app.use(bodyPareser.json())

app.use(bodyPareser.urlencoded({ extended: false }))


app.use('/api/auth',authRouter)





 const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// when i have problem i running the server 
 process.on("unhandledRejection",(err,promise)=>{
    console.log("looged err " , err)
    server.close(()=>process.exit(1))
 })