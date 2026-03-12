const Product=require("../models/product")

//create product
exports.createProduct=async(req,res)=>{
    try{
        const products=await Product.create(req.body)
        res.json(products)
    }
    catch(error)
    {
        res.json({error:error.message})
    }
}


//get product
exports.getProduct=async(req,res)=>{
    try{
        const products=await Product.find()
        res.json(products)
    }
    catch(error){
        res.json({error:error.message})
    }
}


//get single product
exports.getSingleProduct=async(req,res)=>{
    try{
        const products=await Product.findById(req.params.id)
        res.json(products)
    }
    catch(error){
        res.json({error:error.message})
    }
}


//update product
exports.updateProduct=async(req,res)=>{
    try{
        const products=await Product.findByIdAndUpdate(req.params.id,req.body)
        res.json(products)
    }
    catch(error){
        res.json({error:error.message})
    }
}


//delete product
exports.deleteProduct=async(req,res)=>{
    try{
        const products=await Product.findByIdAndDelete(req.params.id)
        res.send("product deleted")
    }
    catch(error){
        res.json({error:error.message})
    }
}