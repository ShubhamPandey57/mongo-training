const express = require("express");
const auth_ConnectDB = require("./config/db");
require("dotenv").config();

const authroutes = require("./routes/sess_route");
const expressSession=require("express-session")

const app = express()
// Middleware
app.use(express.json())


// Connect Database
auth_ConnectDB();
app.use(expressSession({
    secret: process.env.SESSION_SECRET || "mysecretkey", // use a strong secret in .env
    resave: false, // don’t save session if unmodified
    saveUninitialized: false, // don’t create session until something stored
    cookie: { secure: false }, // set to true if using HTTPS
  }))
app.use("/api/auth_sess", authroutes)
const PORT=process.env.PORT||5000

app.listen(PORT,()=>{console.log("server running on http://localhost:5000")})
