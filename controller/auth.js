




const register = (req,res)=>{
    res.send('hi resgister')
}



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