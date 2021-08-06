const User = require('../models/User')


const register = async (req, res, next)=>{
    const {username, mobil, password, dataofbirth} = req.body
    const newUser = new User({
        username,
        mobil,
        password,
        dataofbirth
    })
    console.log(newUser)
    try{
        const user = await newUser.save()
        return res.send({user})
    }catch(e){
        next(e)
    }
}
module.exports = register;
