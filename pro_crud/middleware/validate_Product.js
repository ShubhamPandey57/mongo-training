const { model } = require("mongoose")
const User=require("../models/product")
const validate_Product=async(req,res,next)=>{
    try{
        const user=await User(req.body)
        await user.validate()
        next()
    }
    catch(error){
        res.json({
            success:false,
            errors:error.errors
        })
    }
}
module.exports=validate_Product