const express = require("express");
const auth_ConnectDB = require("./config/db");
require("dotenv").config();

const authroutes = require("./routes/auth_routes");
const cookieParser=require("cookie-parser")

const app = express()
// Middleware
app.use(express.json())


// Connect Database
auth_ConnectDB();
app.use(cookieParser())
app.use("/api/auth", authroutes)
const PORT=process.env.PORT||5000

app.listen(PORT,()=>{console.log("server running on http://localhost:5000")})
