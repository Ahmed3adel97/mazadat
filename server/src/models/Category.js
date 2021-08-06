const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const{ Schema } = mongoose

const CategorySchema = Schema({
    name:{type: String, required: true},
    createdat:{type: Date, default: Date.now}

})

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;