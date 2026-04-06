const express=require("express")
const router=express.Router()
const userController=require("../controller/userController")
const {checkAdminRole} = require("../middleware/checkrole")
const {about,services,employee,Clients} = require("../public/data")

router.post("/register",userController.register)
router.post("/login",userController.login)
router.get("/logout",userController.logout)

// Admin dashboard routes
router.get("/admin/dashboard", checkAdminRole, (req, res) => {
    res.render("admin-dashboard")
})
router.get("/admin/login", (req, res) => {
    res.render("admin-login")
})

// Dashboard API endpoints
router.get("/dashboard-stats", checkAdminRole, userController.getDashboardStats)
router.get("/all-users", checkAdminRole, userController.getAllUsers)

// Service Management endpoints
router.post("/services", checkAdminRole, userController.addService)
router.get("/services", checkAdminRole, userController.getAllServices)
router.put("/services/:id", checkAdminRole, userController.updateService)
router.delete("/services/:id", checkAdminRole, userController.deleteService)

// Public routes
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

module.exports=router
