const sess_User=require("../models/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")



//Register
exports.register = async (req, res) => {
    try {
        const{fullname,email,password}=req.body
        const userExists=await sess_User.findOne({email})
        if (userExists){
            return res.json({message:"user already exists"})
        }
        const hashpassword=await bcrypt.hash(password,10)
        const users=await sess_User.create({
            fullname,
            email,
            password:hashpassword
        })
        res.json({message:"user registered successfully",users})
    }
    catch (error) {
        res.json({ error: error.message })
    }
}


// //Login
exports.login = async (req, res) => {
    try {
        const{email,password}=req.body
        const users=await sess_User.findOne({email})
        if (!users){
            return res.json({message:"Invalid Email"})
        }
        const isMatch=await bcrypt.compare(password,users.password)
        if (!isMatch){
            return res.json({message:"Invalid Password"})
        }

        req.session.userId=users._id
        res.json({message:"Login Successfully"})
    }
    catch (error) {
        res.json({ error: error.message })
    }
}



// //logout(client side token remove)
exports.logout = (req, res) => {
    req.session.destroy(()=>{
        res.json({message:"logout successfully"})
    })
}