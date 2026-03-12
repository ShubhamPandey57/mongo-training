const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:{
        type:String,
        minlength:[3,"name must be at least 3 letters."]
    },
    category:{
        type:String,
        required:[true,"category is required."],
        unique:true
    },
    price:{
        type:Number
    },
    stock:{
        type:Number,
        min:[1,"greater or eqaul to 1"]
    },
    rating:{
        type:Number,
        required:[true,"rating must be given"]
    }
    
})
module.exports=mongoose.model("Product",productSchema)