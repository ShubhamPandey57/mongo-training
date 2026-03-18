const express=require("express")
const router=express.Router()

const auth_controller=require("../controllers/auth_cont")
const authMiddleware=require("../middleware/auth_middleware")
const auth_user=require("../models/user")

router.post("/register",authMiddleware,auth_controller.register)      // register
router.post("/login",auth_controller.login)      // login
router.get("/logout",auth_controller.logout)      // logout

router.get("/profile",authMiddleware,async(req,res)=>{
    const user=await auth_user.findById(req.userId)
    res.json(user)
})
module.exports = router;
