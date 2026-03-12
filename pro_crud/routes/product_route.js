const express=require("express")
const router=express.Router()

const prod_controller=require("../controllers/prod_Cont")
const validateProduct=require("../middleware/validate_Product")

router.post("/",validateProduct,prod_controller.createProduct)      // create the user
router.get("/",prod_controller.getProduct)        // get all user
router.get("/:id",prod_controller.getSingleProduct)  //to fetch single user
router.put("/:id",prod_controller.updateProduct)  //upadate the user
router.delete("/:id",prod_controller.deleteProduct)  //delete the user
module.exports=router