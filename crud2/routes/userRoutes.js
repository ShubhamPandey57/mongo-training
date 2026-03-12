const express=require("express")
const router=express.Router()

const useController=require("../controllers/userControllers")
const validateUser=require("../middleware/validateUser")

router.post("/",validateUser,useController.createUser)      // create the user
router.get("/",validateUser,useController.getUser)        // get all user
router.get("/:id",validateUser,useController.getSingleUser)  //to fetch single user
router.put("/:id",validateUser,useController.updateUser)  //upadate the user
router.delete("/:id",validateUser,useController.deleteUser)  //delete the user
module.exports=router