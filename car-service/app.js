const express=require("express")
const app=express()

app.set("view engine","ejs")
app.use(express.static("public"))

app.use("/",require("./routes/web"))

app.listen(5000,()=>console.log("server running on http://localhost:5000"))