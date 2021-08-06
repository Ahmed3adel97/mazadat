const Product = require('../models/Product')
const getproduct = async(req, res, next) =>{
    try{    
        const products = Product.find({})
    }catch(e){
        next(e)
    }
}