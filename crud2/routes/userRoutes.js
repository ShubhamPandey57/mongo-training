const express=require("express")
const router=express.Router()

const useController=require("../controllers/userControllers")
const validateUser=require("../middleware/validateUser")

router.post("/",validateUser,useController.createUser)
module.exports=router