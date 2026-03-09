// Express.js is a web framework for node.js
// ->creates web servers
// ->handle request(GET,POST ETC.)
// ->build api and websites

// import express from "express"
// const express = require("express");
// const path = require("path");

// const app = express();
// // const staticPath = path.join(__dirname, "public");

// // app.get("/", (req, res) => {
// //   res.sendFile(`${staticPath}/index.html`);
// // });

// // app.get("/about", (req, res) => {
// //   res.sendFile(`${staticPath}/about.html`);
// // });


// })


// app.listen(5000, () => console.log("server running on http://localhost:5000"));

// ---------------------------------------------------------------------------------------------------------//

// ROUTE PARAMETERS IN EXPRESS JS
//route parameters are dynamic values in the url used to identify specific resources.
// they are defined using a colon:in the route path

// const express = require("express");
// const path = require("path");

// const app = express();

//single para meter
// app.get("/users/:id",(req,res)=>{
//   const taskId=req.params.id
//   res.json({
//     Message:"Task Fetched",
//     id:taskId
//   })
// })


//multiple parameters
// app.get("/users/:userId/posts/:postId",(req,res)=>{
//   const {userId,postId}=req.params
//   res.json({
//     userId:userId,
//     postId:postId
//   })
//   res.json({

//   })
// })

//validating parameters
// app.get("/users/:userId",(req,res)=>{
//   const {userId}=req.params
//   if (isNaN(userId)){
//     res.json({
//     Message:"Invalid ID ",
//   })
//   }
//   else{
//   res.json({
//     Message:"Task Fetched",
//     userId:userId
//   })
// }
// })


//(wrong code for now)
// validating parameters with multiple parameters
// app.get("/users/:userId/posts/:postId",(req,res)=>{
//   const {userId,postId}=req.params
//   if (isNaN(userId,postId)){
//     res.json({
//     Message:"Invalid ID ",
//   })
//   }
//   else{
//   res.json({
//     Message:"Task Fetched",
//     userId:userId,
//     postId:postId
//   })
// }
// })
//app.listen(5000, () => console.log("server running on http://localhost:5000"));

//--------------------------------------------------------------------------------------------------------//

//QUERY PARAMETERS IN EXPRESS JS
//query parmaeters are key value pairs added at the end of url to filter,sort or customize data. they come after the "?" in the url

// const express = require("express");

// const app = express();
// // app.get("/tasks",(req,res)=>{
// //   const taskId=req.params.id
// //   res.json(req.query)
// // })

// //task manager filtering
// tasks=[
//   {id:1,title:"task1",completed:true},
//   {id:2,title:"task2",completed:true},
//   {id:3,title:"task3",completed:false},
//   {id:4,title:"task4",completed:true},
//   {id:5,title:"task5",completed:false},
// ]
// app.get("/tasks", (req, res) => {
//   const {completed,limit} = req.query

//   if (completed) {
//     filteredTasks = tasks.filter(t => t.completed === true).slice(0,limit)
//   }
//   res.json(filteredTasks)
// });
// app.listen(5000, () => console.log("server running on http://localhost:5000"));


//-----------------------------------------------------------------------------------------------//
//MIDDLEWARE
// It is a function that runs between receving a request and sending a responde, it decided whether to continue or the stop the request.
//Middleware function has 3 parameters
//  req=>incoming request,  res=>response we send back, next=>function to move to the next step
// syntax:-   function middlewarename(req,res,next){
//          //code
//          //next() } , if next() is not called request will get hanged(unless you send a response)




