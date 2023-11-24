const mongoose = require('mongoose')

require('dotenv').config({path:'./config.env'})

const connectionDB = async(req,res)=>{

   try {
    await mongoose.connect(process.env.MONGO_URI )
    console.log("mongoDb is conncted")
   } catch (error) {

    console.log('bd is not conncted')
    res.status(500).json({success : false , message :"somthing want wrong" ,error : error.message})
   }
}


module.exports = connectionDB