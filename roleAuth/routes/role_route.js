const express=require("express")
const router=express.Router()

const role_controller=require("../controllers/role_cont")
// const authMiddleware=require("../middleware/sess_mid")
// const role_user=require("../models/user")

router.post("/register",role_controller.register)      // register
router.post("/login",role_controller.login)      // login
router.get("/logout",role_controller.logout)      // logout

// router.get("/profile",authMiddleware,async(req,res)=>{       //using middleware
//     const user=await auth_user.findById(req.session.userId)
//     res.json(user)
// })

// router.get("/profile", authMiddleware, async (req, res) => {            //using middleware
//     const User = await role_user.findById(req.session.userId)
//     if (!User) return res.status(404).json({ message: "User not found" })
//     res.json(User)
// })
module.exports = router;
