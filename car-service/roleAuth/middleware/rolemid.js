const jwt =require("jsonwebtoken")
const roleMiddleware=(req,res,next)=>{
    const token=req.session.token
    if(!token){
        return res.json({message:"Not Logged In"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.User=decoded
        next()
    }
    catch(error){
        res.json({message:"Invalid Token"})
    }
}
module.exports=roleMiddleware






