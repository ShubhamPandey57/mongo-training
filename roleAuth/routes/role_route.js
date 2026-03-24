const express=require("express")
const router=express.Router()

const role_controller=require("../controllers/role_cont")
const roleMiddleware=require("../middleware/rolemid")
// const role_user=require("../models/user")

router.post("/register",role_controller.register)      // register
router.post("/login",role_controller.login)      // login
router.get("/logout",role_controller.logout)      // logout
router.get("/profile", roleMiddleware,(req, res) => {            //using middleware
    if (req.User.role === "admin") {
        return res.json("Admin Dashboard");
    }
    res.json("User Dashboard");
});

module.exports = router
