const express=require("express")
const router=express.Router()

const prod_controller=require("../controllers/prod_Cont")
const validateProduct=require("../middleware/validate_Product")

router.post("/",validateProduct,prod_controller.createProduct)      // create the product
// router.get("/",prod_controller.getProduct)        // get all product
// router.get("/:id",prod_controller.getSingleProduct)  //to fetch single product
router.put("/:id",prod_controller.updateProduct)  //upadate the product
router.delete("/:id",prod_controller.deleteProduct)  //delete the product
// router.get("/",prod_controller.categoryProduct)  //get acc. to category
router.get("/",prod_controller.priceProduct)  //get item >2000
module.exports=router