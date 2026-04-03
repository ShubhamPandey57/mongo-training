const express=require("express")
const router=express.Router()

const{about,services,technicians, clients}=require("../public/data")

router.get("/",(req,res)=>{
    res.render("home",{about,services,technicians,clients})

// router.get("/about", (req, res) => {
//     res.render("about");
// });

// router.get("/service", (req, res) => {
//     res.render("service");
// });

router.get("/contact", (req, res) => {
    res.render("contact");
});
router.get("/signup", (req, res) => {
    res.render("signup");
});
router.get("/login", (req, res) => {
    res.render("login");
});

})
module.exports=router