const mongoose=require("mongoose")

const role_userSchema=mongoose.Schema({
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
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
},{timestamps:true})
module.exports=mongoose.model("role_User",role_userSchema)

