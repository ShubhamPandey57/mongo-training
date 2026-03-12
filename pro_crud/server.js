const express = require("express");
const ConnectDB = require("./config/db");
require("dotenv").config();

const productRouter = require("./routes/product_route");

const app = express()


// Middleware
app.use(express.json())


// Connect Database
ConnectDB();

// Test Route
// app.get("/", (req, res) => {
//   res.send("API Running");
// });

// // Routes
app.use("/products", productRouter)

app.listen(5000,()=>{console.log("server running on http://localhost:5000")})
