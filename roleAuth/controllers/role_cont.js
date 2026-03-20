const role_User=require("../models/user")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


//Register
exports.register = async (req, res) => {
    try {
        const{fullname,email,password,role}=req.body
        const userExists=await role_User.findOne({email})
        if (userExists){
            return res.json({message:"user already exists"})
        }
        const hashpassword=await bcrypt.hash(password,10)
        const users=await role_User.create({
            fullname,
            email,
            password:hashpassword,
            role
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
        const users=await role_User.findOne({email})
        if (!users){
            return res.json({message:"Invalid Email"})
        }
        const isMatch=await bcrypt.compare(password,users.password)
        if (!isMatch){
            return res.json({message:"Invalid Password"})
        }
        
        const token=jwt.sign({
            id:users._id,
            role:users.role
        },
    process.env.JWT_SECRET,
    {expiresIn:"1d"})
    req.session.token=token
    res.json({message:"Login Successfully"})
    }
    catch (error) {
        res.json({ error: error.message })
    }
}



//logout(client side token remove)
exports.logout = (req, res) => {
    req.session.destroy(()=>{
        res.clearCookie("connect.sid")
        res.json({message:"logout successfully"})
    })
}