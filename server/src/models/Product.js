const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const{ Schema } = mongoose

const ProductSchema = Schema({
    owner:{type: mongoose.Schema.Types.ObjectId,ref:'User'},
    imagepath: { type: Number, required: true, index: true, unique: true },
    name: { type: String, required: true },
    categoryId: {type: String},
    quantity: {type: Number},
    price: {type: Number},
    dataofbirth:{ type: Date },
    createdat:{type: Date, default: Date.now}

})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;