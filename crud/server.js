// const express = require("express")
// const app=express()

// app.get("/",(req,res)=>{
//     res.send("API WORKING")
// })

// CRUD
//create
// app.use(express.json())

// let products=[]
// app.post("/products",(req,res)=>{
//     const newProducts={
//         id:products.length+1,
//         title:req.body.title,
//         price:req.body.price

//     }
//     products.push(newProducts)
//     res.json(newProducts)
// })

// //read
// app.get("/products/",(req,res)=>{
//     res.json(products)
// })
// // for single product with id
// // app.get("/products/:id",(req,res)=>{
// //     const id=req.params.id
// //     const filterProduct=products.find(p=>p.id==id)
// //     if (!filterProduct){
// //         return res.json({message:"product not found"})
// //     }
// //     res.json(filterProduct)
// // })


// // update a single product with id
// app.put("/products/:id",(req,res)=>{
//     const id=req.params.id
//     const filterProduct=products.find(p=>p.id==id)
//     if(!filterProduct){
//         return res.json({message:"product not found"})
//     }
//     filterProduct.title=req.body.title || filterProduct.title
//     filterProduct.price=req.body.price || filterProduct.price
//     res.json(filterProduct)

// })

// //delete
// app.delete("/products/:id",(req,res)=>{
//     const id=req.params.id
//     const filterProduct=products.find(p=>p.id!=id)
//     if(!filterProduct){
//         return res.json({message:"product not found"})
//     }
//     res.json(filterProduct)
// })


// app.listen(5000,()=>{console.log("server running on http://localhost:5000")})
