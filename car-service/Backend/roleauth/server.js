const connectDB=require('./config/db')
const cookieParser=require("cookie-parser")
const session=require("express-session")
const userRouter=require("./routes/userRoutes")
const MongoStore=require('connect-mongo').default
const seedAdmin=require('./config/seedAdmin')
const applyBodyParser=require('./middleware/bodyParserMiddleware')
const express=require('express')
const path=require('path')
const app=express()
require('dotenv').config({ path: path.join(__dirname, '.env') })
applyBodyParser(app)
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser())
app.use(session({
    secret:process.env.JWT_SECRET || "secret123",
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URI
    }),
    cookie:{
        maxAge:60*60*1000,//1 hour
        httpOnly:true
    }
}))
app.use("/api/auth",userRouter)
app.get("/",(req,res)=>{
    res.redirect("/api/auth/")
})
app.use((req,res)=>{
    res.status(404).json({message:"Route not found"})
})

const startServer = async () => {
    try {
        await connectDB()
        await seedAdmin()
        const port = process.env.PORT || 5000
        app.listen(port,()=>{
            console.log(`Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.error("Failed to start server:", error.message)
        process.exit(1)
    }
}

startServer()
