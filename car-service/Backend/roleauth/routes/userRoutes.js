const express=require("express")
const router=express.Router()
const userController=require("../controller/userController")
const {about,services,employee,Clients} = require("../public/data")
router.post("/register",userController.register)
router.post("/login",userController.login)
router.get("/logout",userController.logout)
router.get("/",(req,res)=>{
    res.render("index", {about,services,employee,Clients})
})
router.get("/service",(req,res)=>{
    res.render("service", {services})
})
router.get("/contact",(req,res)=>{
    res.render("contact")
})
router.get("/about",(req,res)=>{
    res.render("about")
})
router.get("/admin/login", (req, res) => {
    res.render("admin-login")
})

module.exports=router
