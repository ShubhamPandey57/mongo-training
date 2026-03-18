const jwt =require("jsonwebtoken")
const authMiddleware=(req,res,next)=>{
    let token=req.session.token
    //console.log(token)
    if (!token && req.headers.authorization){
        token =req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return res.json({message:"Not Logged In"})
    }
    next()
}
module.exports=authMiddleware