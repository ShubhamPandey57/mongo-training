const express = require("express");
const auth_ConnectDB = require("./config/db");
require("dotenv").config();
const MongoStore=require("connect-mongo").default
const roleroutes = require("./routes/role_route");
const expressSession=require("express-session")
const cookieparser=require("cookie-parser")

const app = express()
// Middleware
app.use(express.json())
app.use(cookieparser())

// Connect Database
auth_ConnectDB();
app.use(expressSession({
    secret: process.env.SESSION_SECRET|| "mysecretkey", // use a strong secret in .env
    resave: false, // don’t save session if unmodified
    saveUninitialized: false, // don’t create session until something stored
    cookie: { secure: false }, // set to true if using HTTPS
    store: MongoStore.create(
        { mongoUrl: 'mongodb://localhost/roleauthDB' }),
    cookie:{
        maxAge:60*60*1000,          //1hour
        httpOnly:true
    }
  }))
app.use("/api/role/", roleroutes)
const PORT=process.env.PORT||5000

app.listen(PORT,()=>{console.log("server running on http://localhost:5000")})
