const product = require('../models/Product')

const createProduct = async(req, res, next) =>{
    const newProduct = new product({
        owner: req.user.userId,
        imagepath:req.body.imagepath,
        name:req.body.name,
        quantity:req.body.quantity,
        price:req.body.price,
    })


    try{
        const prod = await newProduct.save()
        console.log(prod.owner);
        return res.send({prod})

    }catch(e){
        next(e)
    }
}

module.exports = createProduct

    
