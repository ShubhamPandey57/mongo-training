const express=require("express")
const app=express()
const mongoose=require("mongoose")

app.use(express.json())


const connectData=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/')
        console.log("connected")
    }
    catch(err){
        console.log(err)
    }
}
connectData()



//Schema: Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
// const productSchema=new mongoose.Schema({
//   title: String, 
//   category: String,
//   price: Number,
//   stock: Number,
//   rating: Number, 
//   createdAt:{
//     type:Date,
//     default:Date.now
//   }
// })

// //Model: It is used to interact with Collection
// const Product = mongoose.model('Product', productSchema)

//post to insert
// app.post("/Product",async(req,res)=>{
//     await Product.insertMany([
//         { title: 'Phone', category: 'Electronics', price:500,stock:10, rating:4.5 },
//         { title: 'Laptop', category: 'Electronics', price:1200,stock:5, rating:4.8 },
//         { title: 'Shoes', category: 'Fashion', price:100,stock:20, rating:4.2 },
//         { title: 'Watch', category: 'Fashion', price:250,stock:15, rating:4.0 },
//     ])
//     res.send("Data Inserted")
// })

//get to retrieve
// app.get("/Product",async(req,res)=>{
//    const products=await Product.find()
//    res.json(products)
// })

// ------------------------------------------------------------------------------------------------------------------

//ASSIGNMENT OPERTOR
//$eq(equal to)
// app.get("/Product",async(req,res)=>{
//    const products=await Product.find({price:{$eq:500}}) //or const products=await Product.find({price:500})//
//    res.json(products)
// })

// //$ne( not equal to)
// app.get("/Product",async(req,res)=>{
//    const products=await Product.find({price:{$ne:500}}) 
//    res.json(products)
// })

//query to find category electronics
// app.get("/Product",async(req,res)=>{
//     const products=await Product.find({category:"Electronics"})
//     res.json(products)
// })

//query to find rating not equal to 4.2
// app.get("/Product",async(req,res)=>{
//     const products=await Product.find({rating:{$ne:4.2}})
//     res.json(products)
// })

//$gt(greater than)
// app.get("/Product",async(req,res)=>{
//     const products=await Product.find({price:{$gt:500}})
//     res.json(products)
// })

//$gte(greater than or equal to)
// app.get("/Product",async(req,res)=>{
//     const products=await Product.find({price:{$gte:500}})
//     res.json(products)
// })

//$lt(less than)
// app.get("/Product",async(req,res)=>{
//     const products=await Product.find({price:{$lt:500}})
//     res.json(products)
// })

//$lte(less than or equal to)
// app.get("/Product",async(req,res)=>{
//     const products=await Product.find({price:{$lte:500}})
//     res.json(products)
// })

//$in(in)
// app.get("/Product",async(req,res)=>{
//     const products=await Product.find({rating:{$in:[4.2,4.8]}})
//     res.json(products)
// })

//$nin(not in)
// app.get("/Product",async(req,res)=>{
//     const products=await Product.find({rating:{$nin:[4.2,4.8]}})
//     res.json(products)
// })


//find products with price greater than or equal to 200
//http://localhost:5000/Product/search?minPrice=200
// app.get("/Product/search", async(req, res) => {
//   const {minPrice} = req.query
//   let result=Product
//   if (minPrice) {
//     result = await Product.find({ price: { $gte: minPrice } })
//   }
//   res.json(result)
// })

//find products with category fashion
//http://localhost:5000/Product/search?Category=Fashion
// app.get("/Product/search", async (req, res) => {
//   const Category = req.query.Category
//   const result = await Product.find({ category: Category })
//   res.json(result);
// })

//FIND PRODUCTS WITH CATEGORY ELECTRONICS AND MIN PRICE 500
//http://localhost:5000/Product/search?Category= Electronics&minPrice=500
// app.get("/Product/search", async (req, res) => {
//   const { Category, minPrice } = req.query
//   const result = await Product.find({
//     category: Category,
//     price: { $gte: Number(minPrice) }
//   })

//   res.json(result)
// })

// --------------------------------------------------------------------------------------------------------------

//SORTING
//SORTING IN DESC.
// app.get("/Product", async (req, res) => {
//   const products=await Product.find().sort({price:-1})
//   res.json(products)
// })

// //SORTING IN ASCD.
// app.get("/Product", async (req, res) => {
//   const products=await Product.find().sort({price:1})
//   res.json(products)
// })

// ----------------------------------------------------------------------------------------------------

// //LOGICAL OPERATOR - AND
// app.get("/Product", async (req, res) => {
//   const products=await Product.find({$and:[
//     {category:"Fashion"},
//     {price:{$gt:200}}
//   ]})
//   res.json(products)
// })

//LOGICAL OPERATOR - OR
// app.get("/Product", async (req, res) => {
//   const products=await Product.find({$or:[
//     {category:"Fashion"},
//     {price:{$gt:200}}
//   ]})
//   res.json(products)
// })

//LOGICAL OPERATOR-NOT
// app.get("/Product", async (req, res) => {
//   const products=await Product.find({rating:{$not:{$eq:4.5}}})
//   res.json(products)
// })

// ---------------------------------------------------------------------------------------------------------------------

//findById() is a built-in method from mongoose used to fetch a single document by its _id from MongoDB
//http://localhost:5000/Product/69a67eb85f2b76b779ff511b
// app.get("/Product/:id", async (req, res) => {
//   try{
//      const products=await Product.findById(req.params.id)
//      if(!products){
//       return res.json({message:"product not found"})
//      }
//      res.json(products)
//   }
//   catch{
//     res.json({error:error.message});
//   }
  
// })


//findByIdAndUpdate() is a built-in method from mongoose used to find by its _id and update it in one query.
//http://localhost:5000/Product/69a67eb85f2b76b779ff511b
// app.put("/Product/:id", async (req, res) => {
//   try{
//      const products=await Product.findByIdAndUpdate(req.params.id,{price:150,stock:25,rating:4.4})
//      if(!products){
//       return res.json({message:"product not found"})
//      }
//      res.json("Product updated successfully")
//   }
//   catch{
//     res.json({error:error.message});
//   }
  
// })


//findByIdAndDelete() is a built-in method from mongoose used to delete by its _id.
//http://localhost:5000/Product/69a67eb85f2b76b779ff511b
// app.delete("/Product/:id", async (req, res) => {
//   try{
//      const products=await Product.findByIdAndDelete(req.params.id)
//      if(!products){
//       return res.json({message:"product not found"})
//      }
//      res.json("Product deleted successfully")
//   }
//   catch{
//     res.json({error:error.message});
//   }
  
// })


// //SELECT SPECIFIC FIELDS IN MONGOOSE, IN MONOGOOSE ,YOU CAN SELECT SPECIFIC FIELDS FROMA DOCUMENT USING THE .SELECT() METHOD THIS HELPS IN:
// -IMPROVES PERFORMANCE
// -REDUCE UNNCESSARY DATA
// -HIDE SENSITIVE FIELDS(LIKE PASSWORD)
// //http://localhost:5000/Product/69a67eb85f2b76b779ff511d
// app.get("/Product/:id", async (req, res) => {
//   try{
//      const products=await Product.findById(req.params.id).select('title price')
//      if(!products){
//       return res.json({message:"product not found"})
//      }
//      res.json(products)
//   }
//   catch{
//     res.json({error:error.message});
//   }
  
// })

//USE(-) TO EXCLUDE FIELDS
//http://localhost:5000/Product/69a67eb85f2b76b779ff511d
// app.get("/Product/:id", async (req, res) => {
//   try{
//      const products=await Product.findById(req.params.id).select('-_id -price')
//      if(!products){
//       return res.json({message:"product not found"})
//      }
//      res.json(products)
//   }
//   catch{
//     res.json({error:error.message});
//   }
  
// })


//USING PROJECTION OBJECT
// INSTEAD OF STRING, YOU CAN USE OBJECT
// 1=>INCLUDE
// 2=>EXCLUDE
//NOTE:- YOU CANNOT MIX INCLUDE AND EXCLUDE(except_id)
// app.get("/Product/:id", async (req, res) => {
//   try{
//      const products=await Product.findById(req.params.id).select({category:1,title:1,_id:0})
//      if(!products){
//       return res.json({message:"product not found"})
//      }
//      res.json(products)
//   }
//   catch{
//     res.json({error:error.message});
//   }
  
// })

// -----------------------------------------------------------------------------------------------------------------

// new schema
// const userSchema = new mongoose.Schema({
//   fullname:String,
//   email:String,
//   age:Number
// })
// const User = mongoose.model('User', userSchema)
// app.post("/User", async (req, res) => {
//   await User.insertMany([
//     { fullname: "Amit Sharma", email: "amit.sharma@gmail.com", age: 22 },
//     { fullname: "Rahul Verma", email: "rahul.verma@gmail.com", age: 24 },
//     { fullname: "Priya Singh", email: "priya.singh@gmail.com", age: 21 },
//     { fullname: "Neha Gupta", email: "neha.gupta@gmail.com", age: 23 },
//     { fullname: "Rohit Mehta", email: "rohit.mehta@gmail.com", age: 25 },
//     { fullname: "Anjali Kapoor", email: "anjali.kapoor@gmail.com", age: 20 },
//     { fullname: "Karan Malhotra", email: "karan.malhotra@gmail.com", age: 26 },
//     { fullname: "Sneha Joshi", email: "sneha.joshi@gmail.com", age: 22 },
//     { fullname: "Arjun Nair", email: "arjun.nair@gmail.com", age: 27 },
//     { fullname: "Pooja Patel", email: "pooja.patel@gmail.com", age: 23 },
//     { fullname: "Vikas Yadav", email: "vikas.yadav@gmail.com", age: 24 },
//     { fullname: "Riya Das", email: "riya.das@gmail.com", age: 21 },
//     { fullname: "Suresh Kumar", email: "suresh.kumar@gmail.com", age: 28 },
//     { fullname: "Meera Iyer", email: "meera.iyer@gmail.com", age: 22 },
//     { fullname: "Nikhil Jain", email: "nikhil.jain@gmail.com", age: 25 },
//     { fullname: "Kavita Sharma", email: "kavita.sharma@gmail.com", age: 26 },
//     { fullname: "Aditya Singh", email: "aditya.singh@gmail.com", age: 23 },
//     { fullname: "Simran Kaur", email: "simran.kaur@gmail.com", age: 24 },
//     { fullname: "Deepak Choudhary", email: "deepak.choudhary@gmail.com", age: 27 },
//     { fullname: "Tanvi Agarwal", email: "tanvi.agarwal@gmail.com", age: 21 }
//   ]);

//   res.send("Users Detail Inserted");
// })


const postSchema =new mongoose.Schema({
  title:String,
  userId:mongoose.Schema.Types.ObjectId
})
const Post=mongoose.model("Post",postSchema)
// app.post("/Post",async(req,res)=>{
//   await Post.insertMany([
//     {title:"nodejs",userId:"69a927c95d6816667b4104b1"},
//     {title:"express.js",userId:"69a927c95d6816667b4104b1"},
//     {title:"mongodb",userId:"69a927c95d6816667b4104b2"},
//     {title:"reactjs",userId:"69a927c95d6816667b4104b3"},
//     {title:"javascript",userId:"69a927c95d6816667b4104b4"},
//     {title:"es6",userId:"69a927c95d6816667b4104b4"},
//   ])
// res.send("Post Detail Inserted");
// })


// app.get("/User",async(req,res)=>{
//    const users=await User.find()
//    res.json(users)
// })

// app.get("/Post-with-users",async(req,res)=>{
//   const data=await Post.aggregate([
//     {
//       $lookup:{                        //$lookup in MongoDB is an aggregation stage that performs a join between collections—like a SQL JOIN—by matching a local field with a foreign field and adding the results as a new array field in the output documents.
//         from:"users",
//         localField:"userId",
//         foreignField:"_id",
//         as:"userDetails"
//       }
//     },
//     {
// $unwind:"$userDetails"                // convert array to object
//     }
//   ])
//   res.json(data)
// })

//limit() => RESTRICT THE NUMBER OF RESULT RETURNED.
// static limit
// app.get("/User/", async (req, res) => {
//   try{
//      const users=await User.find().limit(5)
//      if(!users){
//       return res.json({message:"user not found"})
//      }
//      res.json(users)
//   }
//   catch{
//     res.json({error:error.message});
//   }
// })

//dyanamic limit(not correct)
// app.get("/User", async (req, res) => {
//   const limit =req.query.limit
//   try {
//     const users = await User.find().limit(limit)

//     if (!users ) {
//       return res.json({ message: "Users not found" })
//     }

//     res.json(users);
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//VALIDATORS IN MONGOOSE
//create userSchema with all possible validators
app.get("/Post-with-users",async(req,res)=>{
  const data=await Post.validate([
    {name:{
        type:String,
        required:[true,"Name is required"]
    }}
  ])
  res.json(data)
})


//---------------------------------------------------------------------------------------------------------
//new schema
// const studentSchema = new mongoose.Schema({
//   fullname:String,
//   age:Number,
//   course:String,
//   marks:Number
// })
// const Student = mongoose.model('Student', studentSchema)
// app.post("/Student", async (req, res) => {
//   await Student.insertMany([
//     { fullname: "Aman Sharma", age: 21, course: "B.Tech CSE", marks: 85 },
// { fullname: "Rohit Verma", age: 22, course: "B.Tech IT", marks: 78 },
// { fullname: "Priya Singh", age: 20, course: "BCA", marks: 88 },
// { fullname: "Anjali Gupta", age: 21, course: "B.Sc Computer", marks: 82 },
// { fullname: "Rahul Kumar", age: 23, course: "B.Tech CSE", marks: 75 },
// { fullname: "Neha Sharma", age: 22, course: "BCA", marks: 91 },
// { fullname: "Karan Mehta", age: 21, course: "B.Tech IT", marks: 69 },
// { fullname: "Simran Kaur", age: 20, course: "B.Sc IT", marks: 86 },
// { fullname: "Arjun Patel", age: 22, course: "B.Tech CSE", marks: 80 },
// { fullname: "Sneha Reddy", age: 21, course: "BCA", marks: 84 },
// { fullname: "Vikas Yadav", age: 23, course: "B.Tech Mechanical", marks: 72 },
// { fullname: "Pooja Sharma", age: 20, course: "B.Sc Computer", marks: 89 },
// { fullname: "aditya Singh", age: 22, course: "B.Tech CSE", marks: 77 },
// { fullname: "Riya Kapoor", age: 21, course: "BCA", marks: 92 },
// { fullname: "Mohit Jain", age: 23, course: "B.Tech IT", marks: 74 },
// { fullname: "Kavita Verma", age: 20, course: "B.Sc IT", marks: 87 },
// { fullname: "Saurabh Mishra", age: 22, course: "B.Tech CSE", marks: 79 },
// { fullname: "Nisha Gupta", age: 21, course: "BCA", marks: 90 },
// { fullname: "Deepak Kumar", age: 23, course: "B.Tech Electrical", marks: 71 },
// { fullname: "Meera Joshi", age: 20, course: "B.Sc Computer", marks: 83 }
//   ]);

//   res.send("student Detail Inserted");
// })

// app.get("/Student",async(req,res)=>{
//    const students=await Student.find()
//    res.json(students)
// })


//regex
// //Students name start with "A"(case sensitive)
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({fullname:{$regex:"^A"}})
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//Students name start with "A"(case insensitive)
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({fullname:{$regex:"^A",$options:"i"}})
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })


//Students name ends with "h"(case insensitive:= $options:"i")
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({fullname:{$regex:"h$",$options:"i"}})
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })


//Students name contains "sh"(case insensitive:= $options:"i")
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({fullname:{$regex:"sh",$options:"i"}})
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//Students name start with "V AND N(case insensitive:= $options:"i")
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({fullname:{$regex:"^[vn]",$options:"i"}})
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })


// //Students name ends with "A WITH 5 LETTERS"(case insensitive:= $options:"i")
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({fullname:{$regex:"^A....",$options:"i"}})
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//Students name except starts with "A"(case insensitive:= $options:"i")
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({fullname:{$regex:"^[^A]",$options:"i"}})
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//top 2 Students according to marks
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find().sort({marks:-1}).limit(2)
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })


//list Students agr >20 with course BCA
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({$and:[
//       {age:{$gt:20}},
//       {course:{$eq:"BCA"}}
//     ]
//   })
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//list Students by skipping first 3 students
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find().skip(3)
    
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//list Students agr >20 and marks >85
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({$and:[
//       {age:{$gt:20}},
//       {marks:{$gt:85}}
//     ]
//   })
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//list Students age =22 and 23 (case insensitive:= $options:"i")
// app.get("/Student", async (req, res) => {
//   try {
//     const students = await Student.find({age:{$in:[22,23]}})
//     if (!students ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(students)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })

//------------------------------------------------------------------------------------------------//

//aggregate() -->pipline flow:-- collection-->stage1-->stage2-->stage3-->result
// const OrderSchema = new mongoose.Schema({
//   customer:String,
//   product:String,
//   price:Number,
//   quantity:Number,
//   staus:String
// })
// const Order = mongoose.model('Order', OrderSchema)

// app.post("/Order",async(req,res)=>{
//   await Order.insertMany([
//     {customer: "Alice Johnson",product: "Wireless Mouse",price: 1200,quantity: 2,status: "Pending"},
//   {customer: "Ravi Kumar",product: "Bluetooth Headphones",price: 3500,quantity: 1,status: "Shipped"},
//   {customer: "Sophia Lee",product: "Mechanical Keyboard",price: 4500,quantity: 1,status: "Delivered" },
//   {customer: "David Smith",product: "USB-C Charger",price: 800,quantity: 3,status: "Cancelled"},
//   {customer: "Priya Sharma",product: "Smartwatch",price: 7500,quantity: 1,status: "Processing"}
//   ])
//   res.send("Data Inserted")
// })

//simple fetch
// app.get("/Order",async(req,res)=>{
//   try {
//     const orders=await Order.find()
//     if (!orders ) {
//       return res.json({ message: "student not found" })
//     }
//     res.json(orders)
//   } catch (error) {
//     res.json({ error: error.message })
//   }
// })


//multiple query passing
// app.get("/Order",async(req,res)=>{
//   const orders=await Order.aggregate([
//     {$match:{status:"Delivered"}}
//   ])
//   res.json(orders)
// })

// $group(to group the data)
// app.get("/Order",async(req,res)=>{
//   const orders=await Order.aggregate([
//     {$group:{
//       _id:"$customer",
//       totalQuantity:{$sum:"$quantity"}
//     }}
//   ])
//   res.json(orders)
// })

// "$project" is used to select fields, hide fields, rename fields or create new computed fields in the result.
// app.get("/Order",async(req,res)=>{
//   const orders=await Order.aggregate([
//     {$project:
//       {
//         _id:0,  //id is not showed because of 0 if 1 it showed
//         customer:1,
//         price:1,
//         quantity:1,
//         amount:{$multiply:["$price","$quantity"]}}
//     }
//   ])
// res.json(orders)
// })

//ADD 18% tax
// app.get("/Order",async(req,res)=>{
//   const orders=await Order.aggregate([
//     {$project:
//       {
//         _id:0,  //id is not showed because of 0 if 1 it showed
//         customer:1,
//         price:1,
//         quantity:1,
//         totalwithtax:{$multiply: ["$price","$quantity",0.18]}}
//     }
//   ])
// res.json(orders)
// })


// hide id, show-->customer,price,quantity,amount,discount(10%),payment
// app.get("/Order",async(req,res)=>{
//   const orders=await Order.aggregate([
//     {$project:
//       {
//         _id:0,  
//         customer:1,
//         price:1,
//         quantity:1,
//         amount:{$multiply:["$price","$quantity"]},
//         discount:{$multiply:["$price","$quantity",0.1]},
//         payment:{$subtract:[{$multiply:["$price","$quantity"]},{$multiply:["$price","$quantity",0.1]}]}
//     }}
//   ])
// res.json(orders)
// })


//show top 2 payments
// app.get("/Order",async(req,res)=>{
//   const orders=await Order.aggregate([
//     {$project:
//       {
//         _id:0,  
//         customer:1,
//         price:1,
//         quantity:1,
//         amount:{$multiply:["$price","$quantity"]},
//         discount:{$multiply:["$price","$quantity",0.1]},
//         payment:{$subtract:[{$multiply:["$price","$quantity"]},{$multiply:["$price","$quantity",0.1]}]}
//     }},
//     {$sort:{payment:-1}},
//     {$limit:2}
//   ])
// res.json(orders)
// })



app.listen(5000,()=>{console.log("server running on http://localhost:5000")})


