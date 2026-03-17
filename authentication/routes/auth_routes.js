const express=require("express")
const router=express.Router()

const auth_controller=require("../controllers/auth_cont")
const authMiddleware=require("../middleware/auth_middleware")
const auth_user=require("../models/user")

router.post("/register",authMiddleware,auth_controller.register)      // register
router.post("/login",auth_controller.login)      // login
router.get("/logout",auth_controller.logout)      // logout
module.exports = router;
