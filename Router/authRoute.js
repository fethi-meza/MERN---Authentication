const express = require('express')
const router = express.Router()
const {register , login , forgetpassword ,resetpassword} = require('../controller/auth')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/forgetpassword').post(forgetpassword)
router.route('/resetpassword/:resetToken').post(resetpassword)


module.exports =router