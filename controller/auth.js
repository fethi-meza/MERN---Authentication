
const {User ,ValidateRegisterUser ,ValidateLoginUser , ValidateUpdateUser} = require('../models/user')
const bcrypt  = require('bcrypt')
const jwt =require('jsonwebtoken')
//configration env
require('dotenv').config({path:'./config.env'})

/**
 * @desc Register New User
 * @route /api/auth/register
 * @method POST
 * @access public
 */
const register = async (req, res) => {
    try {
      const { error } = ValidateRegisterUser(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      //testing if this user eamil is ready existing(chek in bd)
      let user = await User.findOne({ email: req.body.email });
  
      if (user) {
        return res
          .status(400)
          .json({ message: "this user is Already Registered " });
      }
  
  //hasch password
  const salt = await bcrypt.genSalt(10)
  req.body.password  = await bcrypt.hash(req.body.password ,salt)
  
      user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
       
      });
  
      const result = await user.save();
  
      const token = jwt.sign({ id : user._id  } , process.env.JWT_SECRET_KEY)
  // without the pasword for the result 
  const {password ,...othre}=result._doc
  
  //send the proprty only the pasword 
      res.status(201).json({...othre ,token});
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "somthing went wrong ! " });
    }
  };





const login = (req,res)=>{
    res.send('hi loging')
}

const forgetpassword = (req,res)=>{
    res.send('hi forgetpassword')
}

const resetpassword = (req,res)=>{
    res.send('hi resetpassword')
}

module.exports = {register , login , forgetpassword ,resetpassword}