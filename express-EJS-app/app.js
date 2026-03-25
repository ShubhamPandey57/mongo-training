//EJS=Embedded JavaScript
//MVC=Model,View,Controller

const express=require("express")
const app=express()

app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
    // res.render("index",{fullname:"Sahil"})           //Passing Data
    // res.render("index",{                                //validate Data(condition)
    //     fullname:"Sahil",
    //     isLoggedin:true})   
    // res.render("index",{users:["rahul","vikas","ajay","rohan"]})      // for loop with array

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/service", (req, res) => {
    res.render("service");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

})

app.listen(5000,()=>console.log("server running on http://localhost:5000"))