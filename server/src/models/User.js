const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const{ Schema } = mongoose

const UserSchema = Schema({
    username: { type: String, required: true },
    mobil: { type: Number, required: true, index: true, unique: true },
    password: { type: String, required: true },
    dataofbirth:{ type: Date, required: true },
    createdat:{type: Date, default: Date.now}
})


UserSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.password, salt)
        this.password = hash
        next()
    }catch(e){
        next(e)
    }
})


const User = mongoose.model('User', UserSchema);
module.exports = User;