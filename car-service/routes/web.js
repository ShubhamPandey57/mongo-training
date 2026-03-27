const express=require("express")
const router=express.Router()

const{about,services}=require("../public/data")

router.get("/",(req,res)=>{
    res.render("home",{about,services})

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/service", (req, res) => {
    res.render("service");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

})
module.exports=router