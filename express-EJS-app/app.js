//EJS=Embedded JavaScript
//MVC=Model,View,Controller

const express=require("express")
const app=express()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    // res.render("index")
    // res.render("index",{fullname:"Sahil"})           //Passing Data
    // res.render("index",{                                //validate Data(condition)
    //     fullname:"Sahil",
    //     isLoggedin:true})   
    res.render("index",{users:["rahul","vikas","ajay","rohan"]})


})

app.listen(5000,()=>console.log("server running on http://localhost:5000"))