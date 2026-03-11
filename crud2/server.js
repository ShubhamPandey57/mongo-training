const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const userRouter = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Routes
app.use("/users", userRouter);

app.listen(5000,()=>{console.log("server running on http://localhost:5000")})
