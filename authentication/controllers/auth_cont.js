const auth_User=require("../models/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")



//Register
exports.register = async (req, res) => {
    try {
        const{fullname,email,password}=req.body
        const userExists=await auth_User.findOne({email})
        if (userExists){
            return res.json({message:"user already exists"})
        }
        const hashpassword=await bcrypt.hash(password,10)
        const users=await auth_User.create({
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


//Login
exports.login = async (req, res) => {
    try {
        const{email,password}=req.body
        const users=await auth_User.findOne({email})
        if (!users){
            return res.json({message:"Invalid Email"})
        }
        const isMatch=await bcrypt.compare(password,users.password)
        if (!isMatch){
            return res.json({message:"Invalid Password"})
        }
        const token=jwt.sign(
            {id:users._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        res.json({message:"login successful",token,users})
    }
    catch (error) {
        res.json({ error: error.message })
    }
}



//logout(client side token remove)
exports.logout = (req, res) => {
    res.clearCookie("token")
    return res.json({message:"logout successfully"})
}