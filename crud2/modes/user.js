const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"Fullname is required"],
        minlength:[3,"Name must be atleast of 3 characters"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    age:{
        type:Number,
        min:[18,"Age must be atleast 18."],
        max:[60,"Age must be below 60."]
    }
})
module.exports=mongoose.model("User",userSchema)