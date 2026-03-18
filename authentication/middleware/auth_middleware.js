const jwt =require("jsonwebtoken")
const authMiddleware=(req,res,next)=>{
    let token=req.cookies.token
    //console.log(token)
    if (!token && req.headers.authorization){
        token =req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return res.json({message:"Not Logged In"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.userId=decoded.id
        next()
    }
    catch(error){
        res.json({message:"Invalid Token"})
    }
}
module.exports=authMiddleware